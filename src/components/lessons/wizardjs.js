    $(".container_wizard").each(function(){
      console.log("wizrd script")
        var navListItems = $(this).find('div.setup-panel div a'),
            allWells = $(this).find('.setup-content'),
            allNextBtn = $('.nextBtn');
        allWells.hide();
        console.log(navListItems)
        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);
            navListItems.removeClass('btn-primary').addClass('btn-secondary');
            $item.addClass('btn-primary');
            $item.removeClass('btn-secondary');
            $item.removeClass('disabled');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
     });
        allNextBtn.click(function(){
            var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;
            $(".form-group").removeClass("has-danger");
            for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-danger");
                }
            }
            if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
        });
        $(this).find('.setup-panel div a.btn-primary').trigger('click');
    });
