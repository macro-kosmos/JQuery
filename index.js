// Swal.fire({ icon: "success" })
// Swal.fire({ icon: "error" })
// Swal.fire({ icon: "warning", text: "" })

$("a[href='#']").click(function (event) {
	event.preventDefault()
	$("body, html").animate({ scrollTop: 0 }, "slow")
})
