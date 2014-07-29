angular.module('templates-app', ['about/about.tpl.html', 'forms/sequenceFile/sequenceFileForm.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("forms/sequenceFile/sequenceFileForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("forms/sequenceFile/sequenceFileForm.tpl.html",
    "<div class='jumbotron col-md-12' ng-controller='SequenceFileFormCtrl' >\n" +
    "  <h1 >Sequence</h1>\n" +
    "  <p>\n" +
    "    <input type=\"hidden\" ng-init=\"inputType ='sequenceFile'\" ng-model=\"inputType\" />\n" +
    "    \n" +
    "    <div class=\"col-md-5\">\n" +
    "      <h3>1. Upload Files</h3>\n" +
    "      <div class=\"form-inline\">\n" +
    "        <div   class=\"file-upload btn btn-default\" ng-class='{\"fa fa-check\": refFile}' ng-disabled=\"refFile\">\n" +
    "            <span>{{!refFile ? \"Reference file (.fa/.fasta)\" : ''}}</span>\n" +
    "            <input nv-file-select=\"{id:'refFile'}\" uploader=\"uploader\" type=\"file\" ng-model='refFile' class='upload'/>\n" +
    "        </div>\n" +
    "          <p class=\"help-block\">Upload a reference FASTA genome</p>\n" +
    "      </div>\n" +
    "      <div class='form-inline'>\n" +
    "        <div class=\"file-upload btn btn-default\" ng-class='{\"fa fa-check\": inFile}' ng-disabled=\"inFile\">\n" +
    "            <span>{{!inFile ? \"Input sequence (.fa/.fasta)\" : ''}}</span>\n" +
    "            <input nv-file-select=\"{id:'inFile'}\" uploader=\"uploader\" type=\"file\" \n" +
    "                ng-model='inFile' name=\"inFile\" class='upload' />  \n" +
    "        </div>\n" +
    "\n" +
    "        <p class=\"help-block\">Upload the FASTA file you'd like to annotate</p>\n" +
    "      </div>\n" +
    "      <div class=\"form-inline\">\n" +
    "        <div class=\"file-upload btn btn-default\" ng-class='{\"fa fa-check\": bedFile}' ng-disabled=\"bedFile\">\n" +
    "            <span>{{!bedFile ? \"Genomic Positions File (.bed)\" : ''}}</span>\n" +
    "            <input nv-file-select=\"{id:'bedFile'}\" uploader=\"uploader\"\n" +
    "                ng-model='bedFile' type=\"file\"  name=\"genomic-positions-file\" class='upload'/>\n" +
    "        </div>\n" +
    "\n" +
    "           <p class=\"help-block\">Upload the corresponding BED file</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"uploader.queue.length && (!refFile || !inFile || !bedFile)\" class=\"col-md-7\" >\n" +
    "\n" +
    "            <h3>Queue</h3>\n" +
    "            <button type=\"button\" class=\"btn btn-success btn-s\" ng-click=\"uploader.uploadAll()\" ng-disabled=\"!uploader.getNotUploadedItems().length\">\n" +
    "                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-warning btn-s\" ng-click=\"uploader.cancelAll()\" ng-disabled=\"!uploader.isUploading\">\n" +
    "                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n" +
    "                </button>\n" +
    "                <button type=\"button\" class=\"btn btn-danger btn-s\" ng-click=\"uploader.clearQueue()\" ng-disabled=\"!uploader.queue.length\">\n" +
    "                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n" +
    "                </button>\n" +
    "            <table class=\"table\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th width=\"50%\">Name</th>\n" +
    "                        <th ng-show=\"uploader.isHTML5\">Size</th>\n" +
    "                        <th ng-show=\"uploader.isHTML5\">Progress</th>\n" +
    "                        <th>Status</th>\n" +
    "                        <th>Actions</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"item in uploader.queue\">\n" +
    "                        <td><strong class='upload-file-name'>{{ item.file.name }}</strong></td>\n" +
    "                        <td ng-show=\"uploader.isHTML5\" nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td>\n" +
    "                        <td ng-show=\"uploader.isHTML5\">\n" +
    "                            <div class=\"progress\" style=\"margin-bottom: 0;\">\n" +
    "                                <div class=\"progress-bar\" role=\"progressbar\" ng-style=\"{ 'width': item.progress + '%' }\"></div>\n" +
    "                            </div>\n" +
    "                        </td>\n" +
    "                        <td class=\"text-center\">\n" +
    "                            <span ng-show=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n" +
    "                            <span ng-show=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n" +
    "                            <span ng-show=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n" +
    "                        </td>\n" +
    "                        <td nowrap>\n" +
    "                            <button type=\"button\" class=\"btn btn-success btn-xs\" ng-click=\"item.upload()\" ng-hide='item.isUploaded' \n" +
    "                                ng-disabled=\"item.isReady || item.isUploading || item.isSuccess\">\n" +
    "                                <span class=\"glyphicon glyphicon-upload\"></span>\n" +
    "                            </button>\n" +
    "                            <button type=\"button\" class=\"btn btn-warning btn-xs\" ng-hide='item.isUploaded' ng-click=\"item.cancel()\" ng-disabled=\"!item.isUploading\">\n" +
    "                                <span class=\"glyphicon glyphicon-ban-circle\"></span>\n" +
    "                            </button>\n" +
    "                            <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"item.remove()\">\n" +
    "                                <span class=\"glyphicon glyphicon-trash\"></span>\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            \n" +
    "        \n" +
    "        </div>\n" +
    "       \n" +
    "    <div class='col-md-12' >  \n" +
    "      <h3>2. Choose Genome and Submit</h3>\n" +
    "      <form role=\"form\" name='seqantForm' ng-model='seqantForm' class='form-inline'>\n" +
    "        <div class='form-inline'>\n" +
    "          <div class=\"form-group\">\n" +
    "            <select chosen data-placeholder=\"Choose the species\"\n" +
    "                allow-single-deselect=\"true\" \n" +
    "                ng-model='selectedGenome' width ='false'\n" +
    "                ng-options='object.name for object in genomes'\n" +
    "                ng-required='true'  ng-selected='selected'\n" +
    "            >\n" +
    "              <option value=\"\">Species</option>\n" +
    "          </select>\n" +
    "          </div>\n" +
    "\n" +
    "           <div class=\"form-group\">\n" +
    "            <select name='assembly' chosen data-placeholder=\"Choose the assembly\"\n" +
    "                disable-search=\"true\" allow-single-deselect=\"true\"\n" +
    "                width ='false' ng-model='selectedAssembly' \n" +
    "                ng-options='object.name for object in selectedGenome.assemblies' \n" +
    "                ng-required='true' ng-selected='selected'\n" +
    "            >\n" +
    "              <option value=\"\">Assembly</option>\n" +
    "          </select>\n" +
    "          </div>\n" +
    "           <p class=\"help-block\">Choose your species and assembly.</p>\n" +
    "        </div>\n" +
    "          <div ng-disabled=\"selectedAssembly == null\" class=\"checkbox \">\n" +
    "            \n" +
    "              <input ng-disabled=\"selectedAssembly == null\"  type=\"checkbox\" name='phastConsScore' ng-model='phastConsScoreOptionChosen'> \n" +
    "            <label>PhastCons Score (Optional)</label>\n" +
    "          </div>\n" +
    "          <div ng-show=\"phastConsScoreOptionChosen\" class=\"form-inline ng-hide\" >\n" +
    "            <div ng-repeat=\"option in phastConsOptions\">\n" +
    "                Value: @{{option.name}}\n" +
    "                <input ng-model=\"option.dfault\">                         \n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"checkbox \">\n" +
    "            \n" +
    "              <input ng-disabled=\"selectedAssembly == null\"  type=\"checkbox\" name='phastConsScore' ng-model='phylopOptionChosen'> \n" +
    "            <label>PhyloP Score (Optional)</label>\n" +
    "          </div>\n" +
    "          <div ng-show=\"phylopOptionChosen\" class=\"form-inline ng-hide\">\n" +
    "            <div ng-repeat=\"option in phylopOptions\">\n" +
    "                Value: {{option.name}}\n" +
    "                <input ng-model=\"option.default\">                         \n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div>\n" +
    "          <input ng-disabled=\"seqantForm.$invalid || !inFile || !refFile || !bedFile\" type='submit' class='btn btn-success' value='Submit' ng-click=\"open()\"></input>\n" +
    "         </div>\n" +
    "      </form> \n" +
    "    </div>\n" +
    "\n" +
    "  </p>\n" +
    "  \n" +
    "\n" +
    "  <div ng-show='annotationStarted' class='loading'>\n" +
    "    <img src = 'images/ajax-loader-big.gif'/>\n" +
    "    <div class='loading-text'>Fetching Annotation</div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron home\">\n" +
    "  <h1><a href=\"https://sourceforge.net/projects/seqant/\" target=\"_blank\">SeqAnt</a> Genome Annotator</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "      <a href=\"https://sourceforge.net/projects/seqant/\" target=\"_blank\">SeqAnt</a> annotates single base mutations, insertions, and deletions sequenced on any platform. 	\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one style='display:none'></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a ui-sref=\"tutorial\" class=\"btn btn-large btn-default\">\n" +
    "      <h4><i class=\"fa fa-book\"></i> Get Started</h4>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-thumbs-up\"></i> Wide-Ranging Sequence Annotations</h4>\n" +
    "      <p>\n" +
    "        Silent, Replacement, 5' UTR, 3' UTR, Intronic, Intergenic, presence in dbSNP, and evolutionary conservation. \n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-star\"></i> Identify Compound Heterozygous Loci</h4>\n" +
    "      <p>\n" +
    "       	All loci harboring 2+ coding sequence variants are annotated to help investigators identify potential compound heterozygous loci within exome sequencing experiments.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-retweet\"></i> Get results</h4>\n" +
    "      <p>\n" +
    "       	View here, downloaded in a tab delimited text file, send via email, or uploaded to the UCSC genome browser as a BED file. \n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div>\n" +
    "\n" +
    "");
}]);
