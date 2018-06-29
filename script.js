/************************************************************************************************
 *                                                                                              *
 *                              VARIABLES DECLARATION                                           *
 *                                                                                              *
 ************************************************************************************************/
(function () {
    var adIsViewable = false,
        viewabilityTime = 0,
        viewabilityPercentage = 0;


    function checkViewAbility() {
        var adElement = document.getElementById("ad"),
            adElementDimensions = adElement.getBoundingClientRect(),
            adElementViewAreaVertical = adElementDimensions.top + window.scrollY,
            adElementViewAreaHorizontal = Math.abs(adElementDimensions.left) + adElementDimensions.width;

        if (window.scrollY < adElementDimensions.height + adElementViewAreaVertical
            && Math.abs(adElementDimensions.left) < adElementDimensions.width) {
            adIsViewable = true;
            var viewableX = adElementDimensions.width - Math.abs(adElementDimensions.left);
            var viewableY = adElementDimensions.height - Math.abs(adElementDimensions.top);
            // var percentY =adElementDimensions (adElementViewAreaVertical / adElementDimensions.height) / 100;
            viewabilityPercentage = ((viewableX + viewableY) / (adElementDimensions.width + adElementDimensions.height)) * 100; //todo: this is WIP
        } else {
            adIsViewable = false;
            viewabilityPercentage = 0;
        }
    }


    /**
     * Logs the viewability values in the console
     *
     * @override
     */
    window.log = function () {
        checkViewAbility();
        console.log("Ad is viewable: ", adIsViewable, "\nViewability time of the ad in sec:", viewabilityTime, "\nViewability percentage:", viewabilityPercentage);
    };
})();

/************************************************************************************************
 *                                                                                              *
 *                              YOUR IMPLEMENTATION                                             *
 *                                                                                              *
 ************************************************************************************************/
