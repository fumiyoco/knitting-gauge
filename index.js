const convert = (form) => {
    //let patternGauge;


    const formData = new FormData(form);
    const patternGauge = formData.get("og")
    const patternCastOns = formData.get("oc");
    const newGauge = formData.get("ng");
    const newCastOns =  newGauge * patternCastOns / patternGauge;
      document.getElementsByName("newGauge")[0].innerText = newCastOns;
};