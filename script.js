function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./assets/blenderimage/male0001.png
       ./assets/blenderimage/male0002.png
       ./assets/blenderimage/male0003.png
       ./assets/blenderimage/male0004.png
       ./assets/blenderimage/male0005.png
       ./assets/blenderimage/male0006.png
       ./assets/blenderimage/male0007.png
       ./assets/blenderimage/male0008.png
       ./assets/blenderimage/male0009.png
       ./assets/blenderimage/male0010.png
       ./assets/blenderimage/male0011.png
       ./assets/blenderimage/male0012.png
       ./assets/blenderimage/male0013.png
       ./assets/blenderimage/male0014.png
       ./assets/blenderimage/male0015.png
       ./assets/blenderimage/male0016.png
       ./assets/blenderimage/male0017.png
       ./assets/blenderimage/male0018.png
       ./assets/blenderimage/male0019.png
       ./assets/blenderimage/male0020.png
       ./assets/blenderimage/male0021.png
       ./assets/blenderimage/male0022.png
       ./assets/blenderimage/male0023.png
       ./assets/blenderimage/male0024.png
       ./assets/blenderimage/male0025.png
       ./assets/blenderimage/male0026.png
       ./assets/blenderimage/male0027.png
       ./assets/blenderimage/male0028.png
       ./assets/blenderimage/male0029.png
       ./assets/blenderimage/male0030.png
       ./assets/blenderimage/male0031.png
       ./assets/blenderimage/male0032.png
       ./assets/blenderimage/male0033.png
       ./assets/blenderimage/male0034.png
       ./assets/blenderimage/male0035.png
       ./assets/blenderimage/male0036.png
       ./assets/blenderimage/male0037.png
       ./assets/blenderimage/male0038.png
       ./assets/blenderimage/male0039.png
       ./assets/blenderimage/male0040.png
       ./assets/blenderimage/male0041.png
       ./assets/blenderimage/male0042.png
       ./assets/blenderimage/male0043.png
       ./assets/blenderimage/male0044.png
       ./assets/blenderimage/male0045.png
       ./assets/blenderimage/male0046.png
       ./assets/blenderimage/male0047.png
       ./assets/blenderimage/male0048.png
       ./assets/blenderimage/male0049.png
       ./assets/blenderimage/male0050.png
       ./assets/blenderimage/male0051.png
       ./assets/blenderimage/male0052.png
       ./assets/blenderimage/male0053.png
       ./assets/blenderimage/male0054.png
       ./assets/blenderimage/male0055.png
       ./assets/blenderimage/male0056.png
       ./assets/blenderimage/male0057.png
       ./assets/blenderimage/male0058.png
       ./assets/blenderimage/male0059.png
       ./assets/blenderimage/male0060.png
       ./assets/blenderimage/male0061.png
       ./assets/blenderimage/male0062.png
       ./assets/blenderimage/male0063.png
       ./assets/blenderimage/male0064.png
       ./assets/blenderimage/male0065.png
       ./assets/blenderimage/male0066.png
       ./assets/blenderimage/male0067.png
       ./assets/blenderimage/male0068.png
       ./assets/blenderimage/male0069.png
       ./assets/blenderimage/male0070.png
       ./assets/blenderimage/male0071.png
       ./assets/blenderimage/male0072.png
       ./assets/blenderimage/male0073.png
       ./assets/blenderimage/male0074.png
       ./assets/blenderimage/male0075.png
       ./assets/blenderimage/male0076.png
       ./assets/blenderimage/male0077.png
       ./assets/blenderimage/male0078.png
       ./assets/blenderimage/male0079.png
       ./assets/blenderimage/male0080.png
       ./assets/blenderimage/male0081.png
       ./assets/blenderimage/male0082.png
       ./assets/blenderimage/male0083.png
       ./assets/blenderimage/male0084.png
       ./assets/blenderimage/male0085.png
       ./assets/blenderimage/male0086.png
       ./assets/blenderimage/male0087.png
       ./assets/blenderimage/male0088.png
       ./assets/blenderimage/male0089.png
       ./assets/blenderimage/male0090.png
       ./assets/blenderimage/male0091.png
       ./assets/blenderimage/male0092.png
       ./assets/blenderimage/male0093.png
       ./assets/blenderimage/male0094.png
       ./assets/blenderimage/male0095.png
       ./assets/blenderimage/male0096.png
       ./assets/blenderimage/male0097.png
       ./assets/blenderimage/male0098.png
       ./assets/blenderimage/male0099.png
       ./assets/blenderimage/male0100.png
       ./assets/blenderimage/male0101.png
       ./assets/blenderimage/male0102.png
       ./assets/blenderimage/male0103.png
       ./assets/blenderimage/male0104.png
       ./assets/blenderimage/male0105.png
       ./assets/blenderimage/male0106.png
       ./assets/blenderimage/male0107.png
       ./assets/blenderimage/male0108.png
       ./assets/blenderimage/male0109.png
       ./assets/blenderimage/male0110.png
       ./assets/blenderimage/male0111.png
       ./assets/blenderimage/male0112.png
       ./assets/blenderimage/male0113.png
       ./assets/blenderimage/male0114.png
       ./assets/blenderimage/male0115.png
       ./assets/blenderimage/male0116.png
       ./assets/blenderimage/male0117.png
       ./assets/blenderimage/male0118.png
       ./assets/blenderimage/male0119.png
       ./assets/blenderimage/male0120.png
       ./assets/blenderimage/male0121.png
       ./assets/blenderimage/male0122.png
       ./assets/blenderimage/male0123.png
       ./assets/blenderimage/male0124.png
       ./assets/blenderimage/male0125.png
       ./assets/blenderimage/male0126.png
       ./assets/blenderimage/male0127.png
       ./assets/blenderimage/male0128.png
       ./assets/blenderimage/male0129.png
       ./assets/blenderimage/male0130.png
       ./assets/blenderimage/male0131.png
       ./assets/blenderimage/male0132.png
       ./assets/blenderimage/male0133.png
       ./assets/blenderimage/male0134.png
       ./assets/blenderimage/male0135.png
       ./assets/blenderimage/male0136.png
       ./assets/blenderimage/male0137.png
       ./assets/blenderimage/male0138.png
       ./assets/blenderimage/male0139.png
       ./assets/blenderimage/male0140.png
       ./assets/blenderimage/male0141.png
       ./assets/blenderimage/male0142.png
       ./assets/blenderimage/male0143.png
       ./assets/blenderimage/male0144.png
       ./assets/blenderimage/male0145.png
       ./assets/blenderimage/male0146.png
       ./assets/blenderimage/male0147.png
       ./assets/blenderimage/male0148.png
       ./assets/blenderimage/male0149.png
       ./assets/blenderimage/male0150.png
       ./assets/blenderimage/male0151.png
       ./assets/blenderimage/male0152.png
       ./assets/blenderimage/male0153.png
       ./assets/blenderimage/male0154.png
       ./assets/blenderimage/male0155.png
       ./assets/blenderimage/male0156.png
       ./assets/blenderimage/male0157.png
       ./assets/blenderimage/male0158.png
       ./assets/blenderimage/male0159.png
       ./assets/blenderimage/male0160.png
       ./assets/blenderimage/male0161.png
       ./assets/blenderimage/male0162.png
       ./assets/blenderimage/male0163.png
       ./assets/blenderimage/male0164.png
       ./assets/blenderimage/male0165.png
       ./assets/blenderimage/male0166.png
       ./assets/blenderimage/male0167.png
       ./assets/blenderimage/male0168.png
       ./assets/blenderimage/male0169.png
       ./assets/blenderimage/male0170.png
       ./assets/blenderimage/male0171.png
       ./assets/blenderimage/male0172.png
       ./assets/blenderimage/male0173.png
       ./assets/blenderimage/male0174.png
       ./assets/blenderimage/male0175.png
       ./assets/blenderimage/male0176.png
       ./assets/blenderimage/male0177.png
       ./assets/blenderimage/male0178.png
       ./assets/blenderimage/male0179.png
       ./assets/blenderimage/male0180.png
       ./assets/blenderimage/male0181.png
       ./assets/blenderimage/male0182.png
       ./assets/blenderimage/male0183.png
       ./assets/blenderimage/male0184.png
       ./assets/blenderimage/male0185.png
       ./assets/blenderimage/male0186.png
       ./assets/blenderimage/male0187.png
       ./assets/blenderimage/male0188.png
       ./assets/blenderimage/male0189.png
       ./assets/blenderimage/male0190.png
       ./assets/blenderimage/male0191.png
       ./assets/blenderimage/male0192.png
       ./assets/blenderimage/male0193.png
       ./assets/blenderimage/male0194.png
       ./assets/blenderimage/male0195.png
       ./assets/blenderimage/male0196.png
       ./assets/blenderimage/male0197.png
       ./assets/blenderimage/male0198.png
       ./assets/blenderimage/male0199.png
       ./assets/blenderimage/male0200.png
       ./assets/blenderimage/male0201.png
       ./assets/blenderimage/male0202.png
       ./assets/blenderimage/male0203.png
       ./assets/blenderimage/male0204.png
       ./assets/blenderimage/male0205.png
       ./assets/blenderimage/male0206.png
       ./assets/blenderimage/male0207.png
       ./assets/blenderimage/male0208.png
       ./assets/blenderimage/male0209.png
       ./assets/blenderimage/male0210.png
       ./assets/blenderimage/male0211.png
       ./assets/blenderimage/male0212.png
       ./assets/blenderimage/male0213.png
       ./assets/blenderimage/male0214.png
       ./assets/blenderimage/male0215.png
       ./assets/blenderimage/male0216.png
       ./assets/blenderimage/male0217.png
       ./assets/blenderimage/male0218.png
       ./assets/blenderimage/male0219.png
       ./assets/blenderimage/male0220.png
       ./assets/blenderimage/male0221.png
       ./assets/blenderimage/male0222.png
       ./assets/blenderimage/male0223.png
       ./assets/blenderimage/male0224.png
       ./assets/blenderimage/male0225.png
       ./assets/blenderimage/male0226.png
       ./assets/blenderimage/male0227.png
       ./assets/blenderimage/male0228.png
       ./assets/blenderimage/male0229.png
       ./assets/blenderimage/male0230.png
       ./assets/blenderimage/male0231.png
       ./assets/blenderimage/male0232.png
       ./assets/blenderimage/male0233.png
       ./assets/blenderimage/male0234.png
       ./assets/blenderimage/male0235.png
       ./assets/blenderimage/male0236.png
       ./assets/blenderimage/male0237.png
       ./assets/blenderimage/male0238.png
       ./assets/blenderimage/male0239.png
       ./assets/blenderimage/male0240.png
       ./assets/blenderimage/male0241.png
       ./assets/blenderimage/male0242.png
       ./assets/blenderimage/male0243.png
       ./assets/blenderimage/male0244.png
       ./assets/blenderimage/male0245.png
       ./assets/blenderimage/male0246.png
       ./assets/blenderimage/male0247.png
       ./assets/blenderimage/male0248.png
       ./assets/blenderimage/male0249.png
       ./assets/blenderimage/male0250.png
       ./assets/blenderimage/male0251.png
       ./assets/blenderimage/male0252.png
       ./assets/blenderimage/male0253.png
       ./assets/blenderimage/male0254.png
       ./assets/blenderimage/male0255.png
       ./assets/blenderimage/male0256.png
       ./assets/blenderimage/male0257.png
       ./assets/blenderimage/male0258.png
       ./assets/blenderimage/male0259.png
       ./assets/blenderimage/male0260.png
       ./assets/blenderimage/male0261.png
       ./assets/blenderimage/male0262.png
       ./assets/blenderimage/male0263.png
       ./assets/blenderimage/male0264.png
       ./assets/blenderimage/male0265.png
       ./assets/blenderimage/male0266.png
       ./assets/blenderimage/male0267.png
       ./assets/blenderimage/male0268.png
       ./assets/blenderimage/male0269.png
       ./assets/blenderimage/male0270.png
       ./assets/blenderimage/male0271.png
       ./assets/blenderimage/male0272.png
       ./assets/blenderimage/male0273.png
       ./assets/blenderimage/male0274.png
       ./assets/blenderimage/male0275.png
       ./assets/blenderimage/male0276.png
       ./assets/blenderimage/male0277.png
       ./assets/blenderimage/male0278.png
       ./assets/blenderimage/male0279.png
       ./assets/blenderimage/male0280.png
       ./assets/blenderimage/male0281.png
       ./assets/blenderimage/male0282.png
       ./assets/blenderimage/male0283.png
       ./assets/blenderimage/male0284.png
       ./assets/blenderimage/male0285.png
       ./assets/blenderimage/male0286.png
       ./assets/blenderimage/male0287.png
       ./assets/blenderimage/male0288.png
       ./assets/blenderimage/male0289.png
       ./assets/blenderimage/male0290.png
       ./assets/blenderimage/male0291.png
       ./assets/blenderimage/male0292.png
       ./assets/blenderimage/male0293.png
       ./assets/blenderimage/male0294.png
       ./assets/blenderimage/male0295.png
       ./assets/blenderimage/male0296.png
       ./assets/blenderimage/male0297.png
       ./assets/blenderimage/male0298.png
       ./assets/blenderimage/male0299.png
       ./assets/blenderimage/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#Section1>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  
  ScrollTrigger.create({
    trigger: "#Section1>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  gsap.to("#Section2",{
    scrollTrigger:{
      trigger:`#Section2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#Section3",{
    scrollTrigger:{
      trigger:`#Section3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  
  gsap.to("#Section4",{
    scrollTrigger:{
      trigger:`#Section4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  
  })