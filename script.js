/************************************************************************************************
 *                                                                                              *
 *                              VARIABLES DECLARATION                                           *
 *                                                                                              *
 ************************************************************************************************/
(function () {
    var adIsViewable = false,
        viewabilityTime = 0,
        viewabilityPercentage = 0,
        adElem = document.getElementById("ad").getBoundingClientRect();


    function checkViewAbility() {
        var adElement = document.getElementById("ad"),
            adElementDimensions = adElement.getBoundingClientRect(),
            adElementViewAreaVertical = adElementDimensions.top + window.scrollY

        if (window.scrollY < adElementDimensions.height + adElementViewAreaVertical
            && Math.abs(adElementDimensions.left) < adElementDimensions.width) {
            adIsViewable = true;
            var viewableY = adElementDimensions.height + adElementDimensions.top;
            var viewableX = adElementDimensions.width + adElementDimensions.left;
            var baseY = adElementDimensions.top < 0 ? adElementDimensions.height : adElementDimensions.height + adElementDimensions.top;
            var baseX = adElementDimensions.left < 0 ? adElementDimensions.width : adElementDimensions.width + adElementDimensions.left;
            viewabilityPercentage = parseInt(((viewableX * viewableY) / (baseX * baseY)) * 100);
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
