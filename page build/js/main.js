$(".faq").click(function (e) {
    e.preventDefault();
    $faq = $(this);
    //getting the next element
    $content = $faq.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        $faq.find(".faqIcon i").removeClass("fa-minus");
        $faq.find(".faqIcon i").removeClass("fa-plus");
        //change icon of link based on visibility of content div
        $faq.find(".faqIcon i").addClass(function () {
            //change text based on condition
            return $content.is(":visible") ? "fa-minus" : "fa-plus";
        });
    });

});