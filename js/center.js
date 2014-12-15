jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 6) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2 - 40) + $(parent).scrollLeft() + "px")
    });
return this;
}
$("div.box-wrapper").center(false);
$("div.wide-box-wrapper").center(false);