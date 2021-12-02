const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const sprite = require('gulp-svg-sprite');



function browsersync() {
	browserSync.init({
		server: {
			baseDir: "app/"
		},
		notify: false
	})
}


function cleanDist() {
	return del('dist')
}

function svgSprite() {
	return src('app/images/svg/**/*.svg')
		.pipe(sprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			},
			shape: {
				transform:[
					{
						svgo:{
							plugins:[
								{
									removeAttrs:{
										attrs:['class','data-name','fill','stroke.*']
									}
								},
								{removeXMLNS:true},
							]
						}
					}
				]
			}
		}))
		.pipe(dest('app/images'))
}


function scripts() {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
		'node_modules/rateyo/src/jquery.rateyo.js',
		'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
		'node_modules/mixitup/dist/mixitup.js',
		'app/js/main.js'
	])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}



function styles() {
	return src([
		'app/scss/style.scss'
	])
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 version'],
			grid: true
		})) 
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
}


function build() {
	return src([
		'app/css/style.min.css',
		'app/fonts/**/*',
		'app/js/main.min.js',
		'app/*.html',
		'app/images/**/*.*'
	], { base: 'app' })
		.pipe(dest('dist'))
}



function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/images/svg/**/*.svg'],svgSprite);    
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
	watch(['app/*.html']).on('change', browserSync.reload);
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.cleanDist = cleanDist;
exports.svgSprite = svgSprite;

exports.build = series(cleanDist, build);
exports.default = parallel(styles,scripts, browsersync,svgSprite,watching);