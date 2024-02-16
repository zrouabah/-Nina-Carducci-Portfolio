(function($) {
  $.fn.mauGallery = function(options) {
    // Définition des options par défaut
    $.fn.mauGallery.defaults = {
      columns: 3,
      lightBox: true,
      lightboxId: null,
      showTags: true,
      tagsPosition: "bottom",
      navigation: true,
    };

    // Gestion des écouteurs d'événements
    $.fn.mauGallery.listeners = function(options) {
      $(".gallery-item").on("click", function() {
        if (options.lightBox && $(this).prop("tagName") === "IMG") {
          $.fn.mauGallery.methods.openLightBox($(this), options.lightboxId);
        } else {
          return;
        }
      });

      $(".gallery").on("click", ".nav-link", $.fn.mauGallery.methods.filterByTag);
      $(".gallery").on("click", ".mg-prev", () =>
        $.fn.mauGallery.methods.prevImage(options.lightboxId)
      );
      $(".gallery").on("click", ".mg-next", () =>
        $.fn.mauGallery.methods.nextImage(options.lightboxId)
      );
    };

    // Méthodes pour créer une rangée, envelopper un élément dans une colonne, ouvrir une LightBox, et passer à l'image précédente
    $.fn.mauGallery.methods = {
      createRowWrapper(element) {
        if (
          !element
            .children()
            .first()
            .hasClass("row")
        ) {
          element.append('<div class="gallery-items-row row"></div>');
        }
      },

      wrapItemInColumn(element, columns) {
        if (columns.constructor === Number) {
          element.wrap(
            `<div class='item-column mb-4 col-${Math.ceil(12 / columns)}'></div>`
          );
        } else if (columns.constructor === Object) {
          var columnClasses = "";
          if (columns.xs) {
            columnClasses += ` col-${Math.ceil(12 / columns.xs)}`;
          }
          if (columns.sm) {
            columnClasses += ` col-sm-${Math.ceil(12 / columns.sm)}`;
          }
          // Ajoutez d'autres conditions pour les tailles d'écran si nécessaire
          element.wrap(`<div class='item-column mb-4${columnClasses}'></div>`);
        }
      },

      openLightBox(element, lightboxId) {
        $(`#${lightboxId}`)
          .find(".lightboxImage")
          .attr("src", element.attr("src"));
        $(`#${lightboxId}`).modal("toggle");
      },

      prevImage() {
        let activeImage = null;
        $("img.gallery-item").each(function() {
          if ($(this).attr("src") === $(".lightboxImage").attr("src")) {
            activeImage = $(this);
          }
        });

        // Le reste de votre logique pour passer à l'image précédente
      },
    };

    // Applique les options par défaut ou les options fournies par l'utilisateur
    options = $.extend({}, $.fn.mauGallery.defaults, options);

    // Appelle les écouteurs d'événements
    $.fn.mauGallery.listeners(options);

    // Le reste de votre code...
  };
})(jQuery);
