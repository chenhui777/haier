var gulp = require('gulp');
gulp.task("html",function(){
    gulp.src("html/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\html"));
});
//gulp copy-index

gulp.task("php",function(){
    gulp.src("php/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\php"));
})
gulp.task("php1",function(){
    gulp.src("php1/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\php1"));
})

gulp.task("img",function(){
    gulp.src("img/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\img"))
});

gulp.task("css",function(){
    gulp.src("css/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\css"))
});
gulp.task("favicon",function(){
    gulp.src("favicon/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\favicon"))
});
gulp.task("font",function(){
    gulp.src("font/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\font"))
});
gulp.task("js",function(){
    gulp.src("js/**/*")
        .pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\haier\\js"))
});
//gulp js 单独任务的执行命令
gulp.task("build",["html","php","php1","img","css","favicon","font","js"],function(){
    console.log("ok");
});
//gulp build 一键执行所有的命令


gulp.task("watch",function(){
    gulp.watch("html/**/*",["html"]);
    gulp.watch("php/**/*",["php"]);
	gulp.watch("php1/**/*",["php1"]);
    gulp.watch("img/**/*",["img"]);
    gulp.watch("css/**/*",["css"]);
    gulp.watch("favicon/**/*",["favicon"]);
    gulp.watch("font/**/*",["font"]);
    gulp.watch("js/**/*",["js"]);
})
//gulp watch 监听已执行的命令 当这边发生改变,另一边也相应的改变