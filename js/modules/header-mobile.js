!function(u){u(function(){var n=u('<div class="custom-menu-mobile-container"></div>'),i=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-1"></ul>'),e=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-2"></ul>'),s=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-3"></ul>'),l=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-4"></ul>');n.append(i,e,s,l),i.append(u(".site-banner > .inside .main-navigation .mn-menu-line ul.mn-menu").html()),i.find("ul.mn-menu-submenu").each(function(){var n="Back";u("html").is('[lang="fr"]')&&(n="Retour"),u(this).prepend(u('<li class="mn-menu-item mn-item-prev"><a class="mn-link"><span class="mn-link-text">'+n+"</span></a></li>").on("click",function(n){n.preventDefault(),u(this).closest(".mn-menu-submenu").siblings(".mn-link").removeClass("visible")}))}),i.on("click","li.mn-item-has-submenu > a",function(n){var e=u(this);e.next(".mn-menu-submenu").length&&(n.preventDefault(),i.find("li.mn-item-has-submenu > a.visible").filter(function(){return!u(this).next(".mn-menu-submenu").length||!u(this).next(".mn-menu-submenu").find(e).length}).removeClass("visible"),e.addClass("visible"))}),e.append(u(".site-banner > .inside .top-quicklinks ul.ql-list").html());var m="My account",a="My selection";u("html").is('[lang="fr"]')&&(m="Mon compte",a="Ma sélection"),s.append(u("<li></li>").append(u('<a class="triggerAccount">'+m+"</a>").on("click",function(n){n.preventDefault(),comexposiumCap.isUserLogged()?comexposiumCap.openCap("my-selection","logged"):comexposiumCap.openCap("login","login")}))),s.append(u("<li></li>").append(u('<a class="triggerSelection">'+a+"</a>").on("click",function(n){n.preventDefault(),comexposiumCap.isUserLogged()?comexposiumCap.openCap("my-selection","logged"):comexposiumCap.openCap("my-selection","not-logged")}))),u(".site-banner .lang-switcher ul.ls-lang-list > li").each(function(){var n=u('<li><a href="'+u(this).find("a").attr("href")+'">'+u(this).text()+"</a></li>");u(this).hasClass("is-active")&&n.addClass("is-active"),l.append(n)});var t=u('<span class="custom-trigger-menu-mobile"><span></span><span></span><span></span></span>').on("click",function(n){n.preventDefault(),u("html").hasClass("custom-menu-mobile-open")?(i.find("li.mn-item-has-submenu > a.visible").removeClass("visible"),u("html").removeClass("custom-menu-mobile-open")):u("html").addClass("custom-menu-mobile-open")});u(".site-banner > .inside").append(t),u("body").append(n)})}(jQuery);