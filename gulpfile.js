//gulpfile для ввода команд в gulp
//создаём переменные которым передаём возможности gulp
const { src, dest, watch, parallel, series } = require('gulp');
/*создаём переменную scss передаём с помощью команды require все возможности gulp-sass а также sass который конвертирует css в scss*/
const scss = require('gulp-sass')(require('sass'));
//постоянная concat которой передаём возможности gulp-concat который объеденяет все файлы в один
const concat = require('gulp-concat');
//постоянная для отображения данных в браузере
const browserSync = require('browser-sync').create();
//постоанная для работы js default такие требования для данного gulpa
const uglify = require('gulp-uglify-es').default;
//поятоснная для лучшей работы с более позднеми браузерами кросбраузерность
const autoprefixer = require('gulp-autoprefixer');
//постоянна для удаления контента ,объектов
const del = require('del');
const svgSprite = require('gulp-svg-sprite');



//создаём функцию задаём имя browsersync для создания сервера
function browsersync() {
	browserSync.init({
		server: {
			//папка для отслеживание сервера 
			baseDir: "app/"
		},
		//в углу не появляется строчка обновления
		notify: false
	})
}


//удаляет папку дист
function cleanDist() {
	return del('dist')
}

function svgSprit() {
	return src('app/svg/*.svg')
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(dest('app/images'))
}

//создаём функцию scripts для работы с js
function scripts() {
	//указывается путь в main.js но в основном еще используются бибилиотеки js
	//[]означает что будет несколько файлов с расширением js, и последний будет main.js
	return src([
		//подключаем файлы js
		'node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
		'node_modules/mixitup/dist/mixitup.js',
		'app/js/main.js'
	])
		//Объеденяем в единный файл и переименовываем
		.pipe(concat('main.min.js'))
		//данный плагин отвечает за минифицирование
		.pipe(uglify())
		//после переименования и минифицирования ложим файл в папку js
		.pipe(dest('app/js'))
		//когда меняеться информаци в js страница(сервер) обновляется
		.pipe(browserSync.stream())
}


//создаём функцию  и задаём имя styles данная функция конвертирует из scss в css 
function styles() {
	//src работает благодаря тому , что мы передали возможности gulp подключаем и находим файл style.scss
	return src([
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
		'app/scss/style.scss'
	])
		//передаём возможности конвертации благодаря постоянной scss
		//compressed,expanded добовляет минифицированость в файле css все пишеться в одну строку
		.pipe(scss({ outputStyle: 'expanded' }))
		//постоянная concat может переиминовывать файлы а также обхеденять js scss html 
		.pipe(concat('style.min.css'))
		//пред тем как внести в папку подключаем автопрефиксер отслеживает на 10 последних версиях браузера,работает с гридами
		.pipe(autoprefixer({
			//использовать для последних 10 версий браузеров
			overrideBrowserslist: ['last 10 version'],
			grid: true
		}))
		//постоянной (dest= присвоили возможности gulp) мы указываем путь куда файл scss будет переносить сконвертированные данные 
		.pipe(dest('app/css'))
		//когда меняеться информаци в scss страница(сервер) stream добовляет стили без перегагрузки страницы
		.pipe(browserSync.stream())
}


//данная функция собарает все файлы и выкидывает в чистовую папку
function build() {
	return src([
		'app/css/style.min.css',
		'app/fonts/**/*',
		'app/js/main.min.js',
		'app/*.html',
		'app/images/**/*.*'
		//данный код позволяет выкидываь по папкам как в app а не файлами по отдельности 
	], { base: 'app' })
		.pipe(dest('dist'))
}


//автомотическое слежение за проектом за их изменениями
//создаём функцию под именем watching слежение
function watching() {
	//обращаемся к переменной и указываем путь к файлу за которым надо следить
	//**за всеми внутринними файлами и папками *за всеми файлами с расширениями .scss
	//при появлении изменений в папке scss функция watching запускает функцию styles
	watch(['app/scss/**/*.scss'], styles);
	//при появлении изменений в папке js функция запускает функцию scripts
	//следит за всеми файлами js кроме > ! перестаёт следить за файлом main.min.js        
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
	//слежение за файлами html и обновление страницы
	watch(['app/*.html']).on('change', browserSync.reload);
}

//запуск функции styles
exports.styles = styles;
//запуск функцию слежения watching
exports.watching = watching;
//запуск функции сервера browsersync
exports.browsersync = browsersync;
//запуск функции java scripts
exports.scripts = scripts;
//запуск функции удаления папки дист
exports.cleanDist = cleanDist;
exports.svgSprit = svgSprit;

//series свойства gulp выполнять по очереди как заданно
exports.build = series(cleanDist, build);``


//таск по дефолту(defult) прописывая в терминале gulp запускаеться заданое значение 
//свойства parallel разрешает запускать одновременно несколько задач в терминале
exports.default = parallel(styles,scripts, browsersync,svgSprit,watching);