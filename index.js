// Swal.fire({ icon: "success" })
// Swal.fire({ icon: "error" })
// Swal.fire({ icon: "warning", text: "" })

$(".box").scroll(function () {
	$("body").append(
		$("<div>", {
			text: "Hello",
		})
	)
})
