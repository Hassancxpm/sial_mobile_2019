!function(u){u(function(){var e=u('<div class="custom-menu-mobile-container"></div>'),i=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-1"></ul>'),n=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-2"></ul>'),a=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-3"></ul>'),s=u('<ul class="custom-menu-mobile-inner custom-menu-mobile-inner-4"></ul>');e.append(i,n,a,s),i.append(u(".site-banner > .inside .main-navigation .mn-menu-line ul.mn-menu").html()),i.find("ul.mn-menu-submenu").each(function(){var e="Back";u("html").is('[lang="fr"]')&&(e="Retour"),u(this).prepend(u('<li class="mn-menu-item mn-item-prev"><a class="mn-link"><span class="mn-link-text">'+e+"</span></a></li>").on("click",function(e){e.preventDefault(),u(this).closest(".mn-menu-submenu").siblings(".mn-link").removeClass("visible")}))}),i.on("click","li.mn-item-has-submenu > a",function(e){var n=u(this);n.next(".mn-menu-submenu").length&&(e.preventDefault(),i.find("li.mn-item-has-submenu > a.visible").filter(function(){return!u(this).next(".mn-menu-submenu").length||!u(this).next(".mn-menu-submenu").find(n).length}).removeClass("visible"),n.addClass("visible"))}),n.append(u(".site-banner > .inside .top-quicklinks ul.ql-list").html());var l="My account",t="My selection";u("html").is('[lang="fr"]')&&(l="Mon compte",t="Ma sélection"),u("#cxpmClientAccountWidget > .logged").is(":visible")?(a.append(u("<li></li>").append(u('<a class="triggerAccount openCapTrigger" data-captarget="my-selection" data-captype="logged">'+l+"</a>"))),a.append(u("<li></li>").append(u('<a class="triggerSelection openCapTrigger" data-captarget="my-selection" data-captype="logged">'+t+"</a>")))):(a.append(u("<li></li>").append(u('<a class="triggerAccount openCapTrigger" data-captarget="login" data-captype="login" data-capdefault="login">'+l+"</a>"))),a.append(u("<li></li>").append(u('<a class="triggerSelection openCapTrigger" data-captarget="my-selection" data-captype="not-logged">'+t+"</a>")))),u(".site-banner .lang-switcher ul.ls-lang-list > li").each(function(){var e=u('<li><a href="'+u(this).find("a").attr("href")+'">'+u(this).text()+"</a></li>");u(this).hasClass("is-active")&&e.addClass("is-active"),s.append(e)});var m=u('<span class="custom-trigger-menu-mobile"><span></span><span></span><span></span></span>').on("click",function(e){e.preventDefault(),u("html").hasClass("custom-menu-mobile-open")?(i.find("li.mn-item-has-submenu > a.visible").removeClass("visible"),u("html").removeClass("custom-menu-mobile-open")):u("html").addClass("custom-menu-mobile-open")});u(".site-banner > .inside").append(m),u("body").append(e)})}(jQuery);