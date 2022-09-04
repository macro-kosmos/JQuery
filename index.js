// Swal.fire({ icon: "success" })
// Swal.fire({ icon: "error" })
// Swal.fire({ icon: "warning", text: "" })

let nav = $(".nav")

$(window).scroll(function () {
	if (!nav.hasClass("fixed") && $(window).scrollTop() > nav.offset().top) {
		nav.addClass("fixed").data("top", nav.offset().top)
	} else if (nav.hasClass("fixed") && $(window).scrollTop() < nav.data("top")) {
		nav.removeClass("fixed")
	}
})
