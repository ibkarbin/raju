 var myUtils = {};
            myUtils.preventDefaultTouchMove = function(e) {
                e.preventDefault();
            }
 
                function enableSort() {
                $("#butSort").hide();
                $("#butScroll").show();

                try {
                    document.removeEventListener('touchmove', myUtils.preventDefaultTouchMove);
                    myUtils.myScroll.disable();

                } catch(e) {
                }

// Important.  Restore overflow to #wrapper because
// iScroll overrides this.
                $("#wrapper").css("overflow", "");
                $("#itemsList").sortable({
                    handle : "label",
                    axis : 'y',
                    disabled : false
                });
            }


            function enableScroll() {
                $("#butSort").show();
                $("#butScroll").hide();

                $("#itemsList").sortable({
                    disabled : true
                });
                document.addEventListener('touchmove', myUtils.preventDefaultTouchMove, false);
                switchOniScroll();
                myUtils.myScroll.refresh();
            }


            function switchOniScroll() {
                if ( typeof myUtils.myScroll === "undefined") {
                    myUtils.myScroll = new iScroll('wrapper');

                } else {
                    myUtils.myScroll.enable();
                }
            }

            $(function() {
                $("#butSort").click(function() {
                    enableSort();
                });
                $("#butScroll").click(function() {
                    enableScroll();
                });
            });