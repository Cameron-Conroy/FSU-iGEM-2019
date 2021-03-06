
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(document).ready(function () {

        //remove the HQ_page id
        $("#HQ_page").attr('id', '');


        //highlight current page on the menu
        highlight_current_page_menu();

        //accessing submenus
        $(".menu_item").click(function () {
            $(".submenu_control_icon", this).toggleClass("open");
            $(this).next(".submenu").fadeToggle(400);
        });




    });


    function highlight_current_page_menu() {

        var page_url = "https://2019.igem.org/";
        page_url = page_url + wgPageName;
        $("a[href$='" + page_url + "']").children().addClass("current_page");

        //if the page is in a submenu, open the submenu and make the appropiate changes
        if ($(".current_page").hasClass("submenu_item")) {

            $(".current_page").parent().parent().fadeToggle(400);
            $(".current_page").parent().parent().prev().addClass("current_page");
            $(".menu_item.current_page > .submenu_control_icon").toggleClass("open");

        }
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
