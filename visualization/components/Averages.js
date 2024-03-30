function AverageData() {
  return {
    __html: `

<style>

</style>

<div id="fig_el3141158573888163665825096"></div>
<script>
function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){
       
       mpld3.draw_figure("fig_el3141158573888163665825096", {"width": 1200.0, "height": 800.0, "axes": [{"bbox": [0.05887731481481482, 0.07284722222222229, 0.9286226851851852, 0.8804861111111111], "xlim": [2013.55, 2023.45], "ylim": [-25.226041666666667, 714.7302083333333], "xdomain": [2013.55, 2023.45], "ydomain": [-25.226041666666667, 714.7302083333333], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 7, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "visible": true}, {"position": "left", "nticks": 10, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el314114840014672", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el314115855642832", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data01", "xindex": 0, "yindex": 2, "coordinates": "data", "id": "el314115856590672", "color": "#FF7F0E", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data01", "xindex": 0, "yindex": 3, "coordinates": "data", "id": "el314114840096016", "color": "#2CA02C", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "axes", "id": "el314115855655248", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 2, "coordinates": "axes", "id": "el314114840098640", "color": "#FF7F0E", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 3, "coordinates": "axes", "id": "el314114840098576", "color": "#2CA02C", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}], "paths": [{"data": "data03", "xindex": 0, "yindex": 1, "coordinates": "axes", "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"], "id": "el314115856579664", "dasharray": "none", "alpha": 0.8, "facecolor": "rgba(255, 255, 255, 0.8)", "edgecolor": "rgba(204, 204, 204, 0.8)", "edgewidth": 1.0, "zorder": 1000000.0}], "markers": [], "texts": [{"text": "Year", "position": [0.5, -0.041564792176039124], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115859197456"}, {"text": "Average", "position": [-0.03737863472635947, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115911767184"}, {"text": "Average Plate Appearances, Hits, and Home Runs by Year", "position": [0.5, 1.0118305860083603], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115844201232"}, {"text": "Plate Appearances", "position": [0.8721224433836452, 0.5240555248836659], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314115859208144"}, {"text": "Hits", "position": [0.8721224433836452, 0.49432131871598706], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314114840103760"}, {"text": "Home Runs", "position": [0.8721224433836452, 0.4645871125483082], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314114840104144"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[2014.0, 673.5125, 146.56666666666666, 8.408333333333333], [2015.0, 670.7125, 146.85, 8.8875], [2016.0, 673.4166666666666, 148.7125, 8.929166666666667], [2017.0, 673.4375, 148.41666666666666, 8.975], [2018.0, 675.5125, 153.37083333333334, 10.020833333333334], [2019.0, 676.8166666666667, 153.875, 9.7125], [2020.0, 680.2666666666667, 157.07916666666668, 10.375], [2021.0, 680.7375, 153.6125, 9.716666666666667], [2022.0, 681.0958333333333, 156.77083333333334, 10.125], [2023.0, 681.0541666666667, 158.62916666666666, 10.3125]], "data02": [[0.837224084852866, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517], [0.8496877843281443, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517], [0.8621514838034225, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517]], "data03": [[0.8347313449578104, 0.45244104424639164], [0.9912754103673054, 0.45244104424639164], [0.993768150262361, 0.45244104424639164], [0.993768150262361, 0.4563845729158451], [0.993768150262361, 0.5436154270841549], [0.993768150262361, 0.5475589557536084], [0.9912754103673054, 0.5475589557536084], [0.8347313449578104, 0.5475589557536084], [0.8322386050627548, 0.5475589557536084], [0.8322386050627548, 0.5436154270841549], [0.8322386050627548, 0.4563845729158451], [0.8322386050627548, 0.45244104424639164], [0.8347313449578104, 0.45244104424639164]]}, "id": "el314115857388816", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
   }(mpld3);
}else if(typeof define === "function" && define.amd){
   // require.js is available: use it to load d3/mpld3
   require.config({paths: {d3: "https://d3js.org/d3.v5"}});
   require(["d3"], function(d3){
      window.d3 = d3;
      mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.10.js", function(){
         
         mpld3.draw_figure("fig_el3141158573888163665825096", {"width": 1200.0, "height": 800.0, "axes": [{"bbox": [0.05887731481481482, 0.07284722222222229, 0.9286226851851852, 0.8804861111111111], "xlim": [2013.55, 2023.45], "ylim": [-25.226041666666667, 714.7302083333333], "xdomain": [2013.55, 2023.45], "ydomain": [-25.226041666666667, 714.7302083333333], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 7, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "visible": true}, {"position": "left", "nticks": 10, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el314114840014672", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el314115855642832", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data01", "xindex": 0, "yindex": 2, "coordinates": "data", "id": "el314115856590672", "color": "#FF7F0E", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data01", "xindex": 0, "yindex": 3, "coordinates": "data", "id": "el314114840096016", "color": "#2CA02C", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "axes", "id": "el314115855655248", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 2, "coordinates": "axes", "id": "el314114840098640", "color": "#FF7F0E", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 3, "coordinates": "axes", "id": "el314114840098576", "color": "#2CA02C", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}], "paths": [{"data": "data03", "xindex": 0, "yindex": 1, "coordinates": "axes", "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"], "id": "el314115856579664", "dasharray": "none", "alpha": 0.8, "facecolor": "rgba(255, 255, 255, 0.8)", "edgecolor": "rgba(204, 204, 204, 0.8)", "edgewidth": 1.0, "zorder": 1000000.0}], "markers": [], "texts": [{"text": "Year", "position": [0.5, -0.041564792176039124], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115859197456"}, {"text": "Average", "position": [-0.03737863472635947, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115911767184"}, {"text": "Average Plate Appearances, Hits, and Home Runs by Year", "position": [0.5, 1.0118305860083603], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115844201232"}, {"text": "Plate Appearances", "position": [0.8721224433836452, 0.5240555248836659], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314115859208144"}, {"text": "Hits", "position": [0.8721224433836452, 0.49432131871598706], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314114840103760"}, {"text": "Home Runs", "position": [0.8721224433836452, 0.4645871125483082], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314114840104144"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[2014.0, 673.5125, 146.56666666666666, 8.408333333333333], [2015.0, 670.7125, 146.85, 8.8875], [2016.0, 673.4166666666666, 148.7125, 8.929166666666667], [2017.0, 673.4375, 148.41666666666666, 8.975], [2018.0, 675.5125, 153.37083333333334, 10.020833333333334], [2019.0, 676.8166666666667, 153.875, 9.7125], [2020.0, 680.2666666666667, 157.07916666666668, 10.375], [2021.0, 680.7375, 153.6125, 9.716666666666667], [2022.0, 681.0958333333333, 156.77083333333334, 10.125], [2023.0, 681.0541666666667, 158.62916666666666, 10.3125]], "data02": [[0.837224084852866, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517], [0.8496877843281443, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517], [0.8621514838034225, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517]], "data03": [[0.8347313449578104, 0.45244104424639164], [0.9912754103673054, 0.45244104424639164], [0.993768150262361, 0.45244104424639164], [0.993768150262361, 0.4563845729158451], [0.993768150262361, 0.5436154270841549], [0.993768150262361, 0.5475589557536084], [0.9912754103673054, 0.5475589557536084], [0.8347313449578104, 0.5475589557536084], [0.8322386050627548, 0.5475589557536084], [0.8322386050627548, 0.5436154270841549], [0.8322386050627548, 0.4563845729158451], [0.8322386050627548, 0.45244104424639164], [0.8347313449578104, 0.45244104424639164]]}, "id": "el314115857388816", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://d3js.org/d3.v5.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.10.js", function(){
                 
                 mpld3.draw_figure("fig_el3141158573888163665825096", {"width": 1200.0, "height": 800.0, "axes": [{"bbox": [0.05887731481481482, 0.07284722222222229, 0.9286226851851852, 0.8804861111111111], "xlim": [2013.55, 2023.45], "ylim": [-25.226041666666667, 714.7302083333333], "xdomain": [2013.55, 2023.45], "ydomain": [-25.226041666666667, 714.7302083333333], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 7, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "visible": true}, {"position": "left", "nticks": 10, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el314114840014672", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el314115855642832", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data01", "xindex": 0, "yindex": 2, "coordinates": "data", "id": "el314115856590672", "color": "#FF7F0E", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data01", "xindex": 0, "yindex": 3, "coordinates": "data", "id": "el314114840096016", "color": "#2CA02C", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 1, "coordinates": "axes", "id": "el314115855655248", "color": "#1F77B4", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 2, "coordinates": "axes", "id": "el314114840098640", "color": "#FF7F0E", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}, {"data": "data02", "xindex": 0, "yindex": 3, "coordinates": "axes", "id": "el314114840098576", "color": "#2CA02C", "linewidth": 1.5, "dasharray": "none", "alpha": 1, "zorder": 1000002.0, "drawstyle": "default"}], "paths": [{"data": "data03", "xindex": 0, "yindex": 1, "coordinates": "axes", "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"], "id": "el314115856579664", "dasharray": "none", "alpha": 0.8, "facecolor": "rgba(255, 255, 255, 0.8)", "edgecolor": "rgba(204, 204, 204, 0.8)", "edgewidth": 1.0, "zorder": 1000000.0}], "markers": [], "texts": [{"text": "Year", "position": [0.5, -0.041564792176039124], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115859197456"}, {"text": "Average", "position": [-0.03737863472635947, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115911767184"}, {"text": "Average Plate Appearances, Hits, and Home Runs by Year", "position": [0.5, 1.0118305860083603], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el314115844201232"}, {"text": "Plate Appearances", "position": [0.8721224433836452, 0.5240555248836659], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314115859208144"}, {"text": "Hits", "position": [0.8721224433836452, 0.49432131871598706], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314114840103760"}, {"text": "Home Runs", "position": [0.8721224433836452, 0.4645871125483082], "coordinates": "axes", "h_anchor": "start", "v_baseline": "auto", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 1000003.0, "id": "el314114840104144"}], "collections": [], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[2014.0, 673.5125, 146.56666666666666, 8.408333333333333], [2015.0, 670.7125, 146.85, 8.8875], [2016.0, 673.4166666666666, 148.7125, 8.929166666666667], [2017.0, 673.4375, 148.41666666666666, 8.975], [2018.0, 675.5125, 153.37083333333334, 10.020833333333334], [2019.0, 676.8166666666667, 153.875, 9.7125], [2020.0, 680.2666666666667, 157.07916666666668, 10.375], [2021.0, 680.7375, 153.6125, 9.716666666666667], [2022.0, 681.0958333333333, 156.77083333333334, 10.125], [2023.0, 681.0541666666667, 158.62916666666666, 10.3125]], "data02": [[0.837224084852866, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517], [0.8496877843281443, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517], [0.8621514838034225, 0.5309567000552095, 0.5012224938875306, 0.4714882877198517]], "data03": [[0.8347313449578104, 0.45244104424639164], [0.9912754103673054, 0.45244104424639164], [0.993768150262361, 0.45244104424639164], [0.993768150262361, 0.4563845729158451], [0.993768150262361, 0.5436154270841549], [0.993768150262361, 0.5475589557536084], [0.9912754103673054, 0.5475589557536084], [0.8347313449578104, 0.5475589557536084], [0.8322386050627548, 0.5475589557536084], [0.8322386050627548, 0.5436154270841549], [0.8322386050627548, 0.4563845729158451], [0.8322386050627548, 0.45244104424639164], [0.8347313449578104, 0.45244104424639164]]}, "id": "el314115857388816", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
            })
         });
}
</script>`,
  };
}

export default function AverageDataVisual() {
  return <div dangerouslySetInnerHTML={AverageData()}></div>;
}