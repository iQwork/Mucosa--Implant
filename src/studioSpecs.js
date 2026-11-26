const TOPIC_STUDIOS = {
  "p1-t1": {
    topicId: "p1-t1",
    simId: "p1-implant-parts",
    imageUrl: "./src/assets/images/p1_t1_implant_parts_1795710167734.jpg",
    xrayImageUrl: "./src/assets/images/p1_t1_xray_1795710168445.jpg",
    supportsXray: true,
    imageAlt: "Cutaway anatomical view of single dental implant between natural teeth showing crown, abutment, retaining screw, and titanium fixture in alveolar bone",
    hudTitleAr: "أجزاء الزرعة السنية الأربعة وموقعها في العظم واللثة",
    hudBadgeEn: "1. Crown · 2. Abutment Screw · 3. Abutment · 4. Fixture",
    interactiveParam: {
      labelAr: "عمق تثبيت برغي الدعامة وتجمع أجزاء الزرعة:",
      minLabel: "مفكوك 0%",
      maxLabel: "مشدود 100%",
      defaultVal: 78,
      formatReadout: (v) => {
        if (v >= 72) return { text: `تطابق وتثبيت مثالي (${Math.round(v)}%)`, tone: "ok" };
        if (v >= 35) return { text: `ربط جزئي للدعامة (${Math.round(v)}%)`, tone: "info" };
        return { text: `فراغ ميكانيكي غير مشدود (${Math.round(v)}%)`, tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.505, y: 0.24 },
      p1: { x: 0.505, y: 0.66 },
      handleLabel: "اسحب شد البرغي"
    },
    targets: [
      {
        id: "t1",
        labelAr: "التاج الخزفي (رقم 1)",
        titleEn: "1. Implant Crown",
        descIq: "التاج هو الجزء الظاهر بالفم اللي يعوض السن المفقود ويركب فوك الدعامة.",
        syncKeywords: ["missing tooth", "Crown"],
        posPct: { x: 50, y: 20 },
        color: "#FBBF24"
      },
      {
        id: "t2",
        labelAr: "برغي الدعامة (رقم 2)",
        titleEn: "2. Abutment Retaining Screw",
        descIq: "البرغي الداخلي رقم 2 بالشريحة الرابعة هو اللي يشد الدعامة بقوة داخل جسم الزرعة.",
        syncKeywords: ["Abutment screw", "Numbered"],
        posPct: { x: 50.5, y: 31 },
        color: "#38BDF8"
      },
      {
        id: "t3",
        labelAr: "الدعامة (رقم 3)",
        titleEn: "3. Titanium Abutment",
        descIq: "الدعامة تخترق الغشاء المخاطي وتربط التاج الخزفي بجسم الزرعة المدفون بالعظم.",
        syncKeywords: ["connects the crown", "Abutment"],
        posPct: { x: 50, y: 41 },
        color: "#2DD4BF"
      },
      {
        id: "t4",
        labelAr: "جسم الزرعة (رقم 4)",
        titleEn: "4. Titanium Screw Fixture",
        descIq: "جهاز تيتانيوم صغير يشبه البرغي ينزرع مباشرة داخل العظم السنخي الساند.",
        syncKeywords: ["titanium device", "Fixture"],
        posPct: { x: 50, y: 69 },
        color: "#F472B6"
      }
    ],
    scenarios: [
      {
        id: "sc-parts-order",
        labelAr: "1. ترتيب أجزاء الزرعة من التاج للعظم",
        badgeEn: "4-Part Implant Assembly Sequence",
        duration: 8,
        focus: { cx: 0.5, cy: 0.48, scale: 1 },
        highlightTargetId: "t3",
        defaultParam: 78,
        seeIq: "قدامك مقطع تشريحي لزرعة كاملة بين سنين طبيعيين: التاج الأبيض فوك وبعده برغي الدعامة والدعامة اللي تعبر اللثة وجوا بالعظم مسننات الـ Fixture.",
        whyIq: "لازم تفهم ترتيب هاي القطع الأربعة لأن التقاء اللثة يصير تحديداً حول الدعامة وعنق الـ Fixture بينما التاج يتحمل المضغ.",
        tipIq: "أجزاء الزرعة بالترتيب: 1 التاج (يعوض السن) و 2 برغي الدعامة و 3 الدعامة (تربط التاج بالمثبت) و 4 المثبت التيتانيوم (يشبه البرغي بالعظم).",
        tipEn: "Crown replaces missing tooth · Abutment connects crown to fixture · Fixture = titanium screw placed directly into bone (Slide 4 adds #2 Abutment screw)."
      },
      {
        id: "sc-xray-parts",
        labelAr: "2. مطابقة الأجزاء الأربعة على الأشعة السينية",
        badgeEn: "Radiographic Verification of Components",
        duration: 8,
        focus: { cx: 0.5, cy: 0.5, scale: 1.25 },
        highlightTargetId: "t4",
        defaultParam: 90,
        xraySuggested: true,
        seeIq: "في أشعة X-Ray الحقيقية تشوف الكثافة الشعاعية العالية للتاج والدعامة والفراغ الداخلي للبرغي ومسننات التيتانيوم داخل العظم.",
        whyIq: "الأشعة هي اللي تأكدلنا بالعيادة إن الدعامة كاعدة صح 100% على منصة الزرعة بدون أي فراغ ميكانيكي.",
        tipIq: "بدّل إلى وضع [تشريح ↔ أشعة] حتى تقارن مكان كل قطعة بين الصورة التشريحية والأشعة الحقيقية.",
        tipEn: "Radiopaque titanium fixture threads and abutment seating sit directly inside trabecular & cortical bone adjacent to natural tooth PDL spaces."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const pTop = toPx(0.505, 0.25);
      const pBot = toPx(0.505, 0.44 + (st.paramVal / 100) * 0.2);
      h2.drawFlowTrack(ctx, [pTop, pBot], t, st.paramVal >= 72 ? "#2DD4BF" : "#F59E0B", { width: 2.2, pulseCount: 2, showTip: true });
      if (st.scenarioIdx === 1) {
        h2.drawFocusAperture(ctx, { x: 0.5, y: 0.52 }, 0.26, 0.35);
      }
    }
  },

  "p1-t2": {
    topicId: "p1-t2",
    simId: "p1-implant-definition",
    imageUrl: "./src/assets/images/p1_t2_gingival_zones_1795710169070.jpg",
    supportsXray: false,
    imageAlt: "Macro clinical photograph of human anterior gingiva showing alveolar mucosa, mucogingival line, attached gingiva, and marginal gingiva",
    hudTitleAr: "المعالم السريرية للثة وأبعاد الأنسجة الرخوة حول الزرعة",
    hudBadgeEn: "Alveolar Mucosa · Mucogingival Line · Attached & Marginal Gingiva",
    interactiveParam: {
      labelAr: "عرض النسيج الرخو الثابت (Attached Keratinized Width):",
      minLabel: "رقيق 1.0mm",
      maxLabel: "سميك 4.5mm",
      defaultVal: 65,
      formatReadout: (v) => {
        const mm = (1 + (v / 100) * 3.5).toFixed(1);
        return v >= 45
          ? { text: `عرض لثة ملتصقة مثالي (${mm} mm)`, tone: "ok" }
          : { text: `لثة ملتصقة ضيقة (${mm} mm)`, tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.5, y: 0.25 },
      p1: { x: 0.5, y: 0.54 },
      handleLabel: "قس ارتفاع اللثة الملتصقة"
    },
    targets: [
      {
        id: "t1",
        labelAr: "الغشاء المخاطي السنخي",
        titleEn: "Alveolar Mucosa",
        descIq: "نسيج أحمر داكن متحرك غير متقرن غني بالأوعية الدموية فوك الخط الفاصل.",
        syncKeywords: ["Alveolar mucosa", "alloplastic"],
        posPct: { x: 50, y: 18 },
        color: "#FB7185"
      },
      {
        id: "t2",
        labelAr: "الخط المخاطي اللثوي",
        titleEn: "Muco-gingival Line",
        descIq: "الحد المتعرج الفاصل بين الغشاء المخاطي الأحمر المتحرك واللثة الملتصقة الوردية.",
        syncKeywords: ["Muco-gingival line", "beneath the mucosa"],
        posPct: { x: 35, y: 31 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "اللثة الملتصقة",
        titleEn: "Attached Gingiva",
        descIq: "لثة وردية متقرنة محززة تشبه قشر البرتقال ومثبتة بقوة فوق السمحاق والعظم.",
        syncKeywords: ["Attached gingiva", "retention"],
        posPct: { x: 64, y: 42 },
        color: "#2DD4BF"
      },
      {
        id: "t4",
        labelAr: "اللثة الحافية",
        titleEn: "Marginal Gingiva",
        descIq: "الحافة الحرة المحيطة مباشرة بعنق السن أو منصة الزرعة حيث نقيس عرض النسيج عند 1.5 ملم.",
        syncKeywords: ["Marginal gingiva", "1.5 mm"],
        posPct: { x: 40, y: 55 },
        color: "#38BDF8"
      }
    ],
    scenarios: [
      {
        id: "sc-zones",
        labelAr: "1. المناطق اللثوية الأربع من الأعلى للأسفل",
        badgeEn: "Clinical Gingival Zones (Slide 6)",
        duration: 8,
        focus: { cx: 0.5, cy: 0.38, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 65,
        seeIq: "شوف التدرج اللوني الحقيقي باللثة: فوك نسيج أحمر متحرك بعده خط متعرج فاصل وبعده لثة وردية ثابتة وصولاً للحافة اللثوية يم الأسنان.",
        whyIq: "الزرعة تُغرس تحت الـ Mucosa أو الـ Periosteum أو داخل العظم لثبات التعويض الثابت أو المتحرك وفهم هاي الحدود ضروري لاختيار مكان الشق الجراحي.",
        tipIq: "تعريف الزرعة: مادة Alloplastic توضع تحت الغشاء المخاطي أو السمحاق أو داخل/خلال العظم لتوفير الثبات والدعم للتعويض الثابت أو المتحرك.",
        tipEn: "Dental implant = alloplastic structure beneath mucosa/periosteum and/or within/through bone for fixed or removable prosthesis retention & support."
      },
      {
        id: "sc-dimensions",
        labelAr: "2. هندسة قياس النسيج عند المنصة و 1.5 ملم",
        badgeEn: "Platform & 1.5 mm Coronal Width (Slide 8)",
        duration: 8,
        focus: { cx: 0.48, cy: 0.52, scale: 1.38 },
        highlightTargetId: "t4",
        defaultParam: 75,
        seeIq: "التركيز ينتقل للحافة اللثوية حول العنق حيث يقيس الأطباء ارتفاع النسيج وعرضه الأفقي بزاوية 90 درجة عند المنصة وفوكها بـ 1.5 ملم.",
        whyIq: "سماكة النسيج الرخو عند مستوى المنصة وعلى ارتفاع 1.5 ملم إكليلياً تحمي العظم من الانكشاف والانحسار المستقبلي.",
        tipIq: "أبعاد الشريحة 8: Tissue Height + عرض النسيج عند Platform level + عرض النسيج عند 1.5 mm coronal of platform.",
        tipEn: "Slide 8 landmarks: Tissue Height · Tissue width at platform level · Tissue width at 1.5 mm coronal of platform (90° to implant axis)."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const topPt = toPx(0.32, 0.31);
      const midPt = toPx(0.5, 0.33);
      const rPt = toPx(0.68, 0.31);
      h2.drawFlowTrack(ctx, [topPt, midPt, rPt], t, "#FBBF24", { width: 1.8, pulseCount: 2, dashed: true });
      const wScale = 0.04 + (st.paramVal / 100) * 0.24;
      h2.drawFixedGuide(ctx, toPx(0.5, 0.31), toPx(0.5, 0.31 + wScale), `${(1 + (st.paramVal / 100) * 3.5).toFixed(1)} mm`, "#2DD4BF", false);
    }
  },

  "p2-t1": {
    topicId: "p2-t1",
    simId: "p2-osseointegration",
    imageUrl: "./src/assets/images/p2_t1_osseointegration_1795710169490.jpg",
    xrayImageUrl: "./src/assets/images/p2_t1_xray_1795710169881.jpg",
    supportsXray: true,
    imageAlt: "High-magnification anatomical cross-section of threaded titanium dental implant in direct structural contact with living cortical and trabecular bone",
    hudTitleAr: "الاندماج العظمي المباشر (Osseointegration) بدون أنسجة رخوة",
    hudBadgeEn: "Direct Bone-to-Implant Contact · Zero Intervening Soft Tissue",
    interactiveParam: {
      labelAr: "نسبة التماس العظمي المباشر (Bone-to-Implant Contact):",
      minLabel: "تليف رخو 15%",
      maxLabel: "اندماج كامل 95%",
      defaultVal: 88,
      formatReadout: (v) => {
        const bic = Math.round(15 + (v / 100) * 80);
        return v >= 60
          ? { text: `اندماج عظمي ناجح (${bic}% BIC)`, tone: "ok" }
          : { text: `خطر تداخل نسيج رخو (${bic}% BIC)`, tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.4, y: 0.32 },
      p1: { x: 0.4, y: 0.78 },
      handleLabel: "تفحص تماس المسننات بالعظم"
    },
    targets: [
      {
        id: "t1",
        labelAr: "العظم القشري الكثيف",
        titleEn: "Living Cortical Bone",
        descIq: "القشرة العظمية الخارجية الكثيفة عند عنق الزرعة تعطي الثبات الأولي وتحمل القوى.",
        syncKeywords: ["living bone", "completely"],
        posPct: { x: 28, y: 38 },
        color: "#FBBF24"
      },
      {
        id: "t2",
        labelAr: "واجهة المسننات المباشرة",
        titleEn: "Direct Bone-to-Implant Interface",
        descIq: "التحام هيكلي ووظيفي مباشر بين التيتانيوم والعظم الحي بدون أي أنسجة رخوة فاصلة.",
        syncKeywords: ["without intervening soft tissues", "osseointegration"],
        posPct: { x: 42, y: 55 },
        color: "#2DD4BF"
      },
      {
        id: "t3",
        labelAr: "العظم الإسفنجي الحي",
        titleEn: "Trabecular Living Bone",
        descIq: "شبكة التربيقات العظمية الحية الغنية بالأوعية تتخلل مسننات الزرعة الحاملة للضغط.",
        syncKeywords: ["load-bearing", "partially"],
        posPct: { x: 68, y: 60 },
        color: "#38BDF8"
      }
    ],
    scenarios: [
      {
        id: "sc-bic",
        labelAr: "1. تعريف الـ Osseointegration بالالتحام المباشر",
        badgeEn: "Direct Structural & Functional Connection",
        duration: 8,
        focus: { cx: 0.5, cy: 0.52, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 88,
        seeIq: "شوف التيتانيوم ومسنناته ملتحمة وجه لوجه ويا العظم القشري والإسفنجي الحي بدون لا خط وردي ولا نسيج ليفي فاصل.",
        whyIq: "إذا دخل نسيج رخو بين العظم والزرعة تفشل الزرعة وتتحرك؛ فالشرط الذهبي هو غياب أي Intervening soft tissues.",
        tipIq: "الاندماج العظمي: اتصال هيكلي ووظيفي مباشر بين العظم الحي وسطح الزرعة الحاملة للضغط بدون أنسجة رخوة فاصلة.",
        tipEn: "Osseointegration: direct structural and functional connection between living bone and load-bearing implant surface without intervening soft tissues."
      },
      {
        id: "sc-xray-bic",
        labelAr: "2. قراءة الاندماج العظمي في الأشعة السينية",
        badgeEn: "Radiographic Osseointegration Assessment",
        duration: 8,
        focus: { cx: 0.5, cy: 0.52, scale: 1.25 },
        highlightTargetId: "t1",
        defaultParam: 92,
        xraySuggested: true,
        seeIq: "بالأشعة السينية تشوف العظم العتمي ملاصق تماماً لكل سن من أسنان التيتانيوم بدون أي هالة سوداء شفافة حول الجسم.",
        whyIq: "الزرعة تعوض الفقد الكلي أو الجزئي للأسنان ونجاحها السريري يعتمد كلياً على ثبات هذا الاندماج العظمي تحت الحمل الإطباقي.",
        tipIq: "استطباب الزرعة: للمرضى الفاقدين كلياً أو جزئياً للأسنان (Completely and partially edentulous patients).",
        tipEn: "Implant is Rx option for completely & partially edentulous patients; success is based on osseointegration."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const top = toPx(0.41, 0.25);
      const bot = toPx(0.41, 0.82);
      h2.drawFlowTrack(ctx, [top, bot], t, "#2DD4BF", { width: 2, pulseCount: 3 });
      if (st.paramVal < 60) {
        h2.drawCanvasPill(ctx, toPx(0.5, 0.52).x, toPx(0.5, 0.52).y, "Fibrous Gap Risk", "#FB7185");
      }
    }
  },

  "p2-t2": {
    topicId: "p2-t2",
    simId: "p2-periimplantitis",
    imageUrl: "./src/assets/images/p2_t2_periimplantitis_1795710170566.jpg",
    xrayImageUrl: "./src/assets/images/p2_t2_xray_1795710171238.jpg",
    supportsXray: true,
    imageAlt: "Split comparison between healthy peri-implant mucosal seal on the left and plaque-associated peri-implantitis bone loss on the right",
    hudTitleAr: "الختم المخاطي الواقي مقابل التهاب ما حول الزرعة (Peri-implantitis)",
    hudBadgeEn: "Mucosal Seal Protection vs Plaque-Induced Bone Loss",
    interactiveParam: {
      labelAr: "مؤشر تراكم البلاك واختراق الختم المخاطي:",
      minLabel: "ختم سليم 0%",
      maxLabel: "التهاب شديد 100%",
      defaultVal: 72,
      formatReadout: (v) => {
        if (v < 30) return { text: "ختم مخاطي سليم يحمي العظم", tone: "ok" };
        if (v < 65) return { text: "التهاب مخاطي وبداية تجمع بلاك", tone: "info" };
        return { text: "Peri-implantitis وتآكل عظمي حول الزرعة", tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.72, y: 0.22 },
      p1: { x: 0.72, y: 0.65 },
      handleLabel: "تتبع عمق ذوبان العظم"
    },
    targets: [
      {
        id: "t1",
        labelAr: "الختم المخاطي السليم",
        titleEn: "Protective Mucosal Seal",
        descIq: "الجهة اليسرى تبين اللثة الوردية تحكم الإغلاق وتحمي العظم السنخي من البكتيريا.",
        syncKeywords: ["protection (seal)", "invading bacteria"],
        posPct: { x: 16, y: 28 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "تراكم البلاك السني",
        titleEn: "Dental Plaque Biofilm",
        descIq: "البلاك السني المتراكم هو المحفز الرئيسي لالتهاب ما حول الزرعة وفقدانها لاحقاً.",
        syncKeywords: ["dental plaque", "implant loss"],
        posPct: { x: 74, y: 34 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "تآكل العظم (Peri-implantitis)",
        titleEn: "Peri-Implantitis Bone Crater",
        descIq: "التهاب يشبه أمراض اللثة الطبيعية يذوب العظم بشكل حفرة عميقة حول مسننات التيتانيوم.",
        syncKeywords: ["peri-implantitis", "periodontal disease"],
        posPct: { x: 84, y: 54 },
        color: "#FB7185"
      }
    ],
    scenarios: [
      {
        id: "sc-seal-vs-loss",
        labelAr: "1. الختم الصحي مقابل التهاب Peri-implantitis",
        badgeEn: "Healthy Seal vs Plaque-Associated Loss",
        duration: 8,
        focus: { cx: 0.5, cy: 0.45, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 72,
        seeIq: "على اليسار اللثة الوردية سادة الطريق والبنية العظمية صامدة؛ وعلى اليمين البلاك الأصفر ملتهب حول العنق وحافر حفرة بالعظم.",
        whyIq: "السبب الأكبر لفقدان الزرعات السنية هو الـ Peri-implantitis الناتج عن البلاك والذي يشبه أمراض اللثة الطبيعية.",
        tipIq: "السبب الرئيسي لفقدان الزرعة هو dental plaque associated peri-implantitis والـ oral mucosa هي خط الدفاع (Seal) لحماية العظم.",
        tipEn: "Major reason for implant loss = dental plaque associated peri-implantitis (similar to periodontal disease); oral mucosa provides protective seal."
      },
      {
        id: "sc-xray-crater",
        labelAr: "2. الفرق الشعاعي لخسارة العظم في الأشعة",
        badgeEn: "Radiographic Saucer Bone Loss",
        duration: 8,
        focus: { cx: 0.65, cy: 0.48, scale: 1.28 },
        highlightTargetId: "t3",
        defaultParam: 85,
        xraySuggested: true,
        seeIq: "بالأشعة السينية تلاحظ الجهة اليسرى عظمها واصل للمنصة والجهة اليمنى بيها خسارة عظمية سوداء مكشوفة بيها المسننات.",
        whyIq: "بمجرد انكسار الختم المخاطي تنزل البكتيريا لعرف العظم وتفقد الزرعة تماسها العظمي الحرج.",
        tipIq: "الالتحام المباشر بين العظم والزرعة صار عاملاً حرجاً لذلك لازم نفهم علاقة الزرعة بالأنسجة المحيطة لحماية هذا الختم.",
        tipEn: "Direct bone-implant contact is critical; understanding peri-implant soft tissue relation protects alveolar bone from bacterial invasion."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      h2.drawFocusAperture(ctx, { x: 0.74, y: 0.44 }, 0.24, 0.34);
      if (st.paramVal > 45) {
        h2.drawShockRings(ctx, toPx(0.74, 0.44).x, toPx(0.74, 0.44).y, t, 28, "#FB7185");
      }
    }
  },

  "p3-t1": {
    topicId: "p3-t1",
    simId: "p3-tooth-epithelium",
    imageUrl: "./src/assets/images/p3_t1_tooth_epithelium_1795710172738.jpg",
    supportsXray: false,
    imageAlt: "Histological cross-section of natural tooth showing oral epithelium, sulcular epithelium, junctional epithelium, and perpendicular periodontal ligament fibers",
    hudTitleAr: "الظهارة اللثوية الثلاث حول السن الطبيعي واختراق الحاجز",
    hudBadgeEn: "1. JE (Non-Keratinized) · 2. SE · 3. OE (Thick Protective)",
    interactiveParam: {
      labelAr: "عمق النسيج من الظهارة الخارجية نحو الـ JE:",
      minLabel: "السطح الخارجي OE",
      maxLabel: "قاع الرابطة JE",
      defaultVal: 60,
      formatReadout: (v) => {
        if (v < 35) return { text: "الظهارة الفموية الثخينة (OE Protection)", tone: "ok" };
        if (v < 70) return { text: "ظهارة الأخدود اللثوي (SE)", tone: "info" };
        return { text: "الظهارة الرابطة غير المتقرنة (JE)", tone: "ok" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.14, y: 0.28 },
      p1: { x: 0.42, y: 0.56 },
      handleLabel: "تتبع طبقات الظهارة الثلاث"
    },
    targets: [
      {
        id: "t1",
        labelAr: "الظهارة الفموية (OE)",
        titleEn: "Oral Epithelium (OE)",
        descIq: "ظهارة مخاطية ثخينة متقرنة تحمي الأنسجة الصلبة والرخوة من المؤثرات الخارجية.",
        syncKeywords: ["exogenous stimulation", "OE is a thick"],
        posPct: { x: 14, y: 26 },
        color: "#FBBF24"
      },
      {
        id: "t2",
        labelAr: "ظهارة الأخدود (SE)",
        titleEn: "Sulcular Epithelium (SE)",
        descIq: "تبطن الأخدود اللثوي وتنحدر من حافة اللثة باتجاه الظهارة الرابطة.",
        syncKeywords: ["sulcular", "3 types"],
        posPct: { x: 35, y: 40 },
        color: "#38BDF8"
      },
      {
        id: "t3",
        labelAr: "الظهارة الرابطة (JE)",
        titleEn: "Junctional Epithelium (JE)",
        descIq: "غير متقرنة وتتميز بمسافات واسعة بين الخلايا وتكوّن رباطاً قوياً غير قابل للاختراق على السن.",
        syncKeywords: ["non-keratinized", "wide intercellular space"],
        posPct: { x: 40, y: 55 },
        color: "#2DD4BF"
      },
      {
        id: "t4",
        labelAr: "ألياف الـ PDL والملاط",
        titleEn: "Cementum & PDL Fibers",
        descIq: "الألياف العمودية والرباط السنخي السني يغلقان العمق تحت الظهارة لمنع الغزو الجرثومي.",
        syncKeywords: ["impenetrable bond", "microbial invasion"],
        posPct: { x: 75, y: 74 },
        color: "#F472B6"
      }
    ],
    scenarios: [
      {
        id: "sc-three-epi",
        labelAr: "1. طبقات الظهارة الثلاث حول السن الطبيعي",
        badgeEn: "JE · SE · OE Histological Architecture",
        duration: 8,
        focus: { cx: 0.34, cy: 0.44, scale: 1.18 },
        highlightTargetId: "t3",
        defaultParam: 78,
        seeIq: "شوف التدرج النسيجي: باليسار طبقة OE الثخينة المتقرنة بعدين تنحني للداخل كظهارة أخدود SE وبالأخير تنكمش إلى خلايا JE رقيقة لاصقة بالسن.",
        whyIq: "الـ JE غير متقرنة وبها مسافات واسعة بين الخلايا حتى تمر الخلايا الدفاعية بينما الـ OE ثخينة لتحمي من الأكل والاحتكاك.",
        tipIq: "السن الطبيعي عنده 3 أنواع ظهارة: JE (غير متقرنة + wide intercellular space) و SE و OE (ثخينة تحمي من exogenous stimulation).",
        tipEn: "Gingival epithelium = JE (non-keratinized, wide intercellular space) + SE + OE (thick mucosal epithelium protecting from exogenous stimulation)."
      },
      {
        id: "sc-barrier",
        labelAr: "2. كسر الحاجز بالبزوغ والحاجة للرباط المنيع",
        badgeEn: "Tooth Penetration & Impenetrable Bond",
        duration: 8,
        focus: { cx: 0.52, cy: 0.55, scale: 1.25 },
        highlightTargetId: "t4",
        defaultParam: 85,
        seeIq: "اختراق السن للظهارة نحو الفم يفتح بوابة محتملة للبكتيريا لكن اللثة تسدها برباط محكم حول المينا والملاط.",
        whyIq: "بدون هذا الرباط المنيع غير القابل للاختراق تغزو الميكروبات الأنسجة تحت المخاطية وتدمر العظم.",
        tipIq: "بزوغ السن يخترق الـ OE ويكسر الحاجز لذلك تشكل اللثة strong impenetrable bond لحماية الأنسجة تحت المخاطية من microbial invasion.",
        tipEn: "Tooth penetration through OE compromises the barrier; gingiva forms a strong impenetrable bond protecting submucosal tissue from microbial invasion."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const pts = [toPx(0.14, 0.24), toPx(0.35, 0.4), toPx(0.41, 0.56)];
      h2.drawFlowTrack(ctx, pts, t, "#2DD4BF", { width: 2.1, pulseCount: 2, showTip: true });
    }
  },

  "p3-t2": {
    topicId: "p3-t2",
    simId: "p3-biologic-width-tooth",
    imageUrl: "./src/assets/images/p3_t2_biologic_width_tooth_1795710172784.jpg",
    supportsXray: false,
    imageAlt: "Precision anatomical cross-section of natural tooth supra-crestal attachment tissue (biologic width) showing junctional epithelium and perpendicular connective tissue above alveolar crest",
    hudTitleAr: "العرض البيولوجي (Supra-crestal attachment tissue) حول السن",
    hudBadgeEn: "2 mm Total Width · 0.5–1 mm JE + Connective Tissue",
    interactiveParam: {
      labelAr: "قياس مكونات العرض البيولوجي من قاع الـ OSE للعظم:",
      minLabel: "الظهارة JE (0.5–1mm)",
      maxLabel: "الكلية (2.0mm)",
      defaultVal: 100,
      formatReadout: (v) => {
        const mm = (0.5 + (v / 100) * 1.5).toFixed(1);
        return v >= 75
          ? { text: `الـ Biologic Width الكامل (${mm} mm)`, tone: "ok" }
          : { text: `الجزء الظهاري JE (${mm} mm)`, tone: "info" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.46, y: 0.34 },
      p1: { x: 0.46, y: 0.6 },
      handleLabel: "اسحب لقياس العرض البيولوجي"
    },
    targets: [
      {
        id: "t1",
        labelAr: "قاع ظهارة الأخدود (OSE)",
        titleEn: "Bottom of OSE",
        descIq: "النقطة العليا التي يبدأ عندها قياس العرض البيولوجي متجهاً نحو الأسفل.",
        syncKeywords: ["bottom of the OSE", "OSE"],
        posPct: { x: 48, y: 31 },
        color: "#38BDF8"
      },
      {
        id: "t2",
        labelAr: "الظهارة الرابطة (0.5–1 mm)",
        titleEn: "Junctional Epithelium (0.5–1 mm)",
        descIq: "تمثل الجزء الظهاري العلوي من العرض البيولوجي وتشغل حوالي 0.5 إلى 1 ملم.",
        syncKeywords: ["0.5–1 mm", "epithelial (JE)"],
        posPct: { x: 46, y: 40 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "ألياف النسيج الضام",
        titleEn: "Supra-Crestal Connective Tissue",
        descIq: "حزم الكولاجين العمودية المنغرسة بالملاط فوق قمة العظم وتكمل العرض البيولوجي إلى 2 ملم.",
        syncKeywords: ["connective tissue", "supra-crestal"],
        posPct: { x: 54, y: 51 },
        color: "#2DD4BF"
      },
      {
        id: "t4",
        labelAr: "قمة العظم السنخي",
        titleEn: "Top of Alveolar Bone",
        descIq: "النهاية السفلية لامتداد الختم فوق العرف العظمي.",
        syncKeywords: ["top of the alveolar bone", "2 mm"],
        posPct: { x: 64, y: 58 },
        color: "#F472B6"
      }
    ],
    scenarios: [
      {
        id: "sc-bw-bounds",
        labelAr: "1. حدود العرض البيولوجي (من OSE لقمة العظم)",
        badgeEn: "Supra-Crestal Attachment Boundaries",
        duration: 8,
        focus: { cx: 0.52, cy: 0.46, scale: 1.15 },
        highlightTargetId: "t3",
        defaultParam: 100,
        seeIq: "شوف الشريط العمودي من كعب الـ OSE بالزاوية الفوق لحد راس العظم السنخي: أول شي خلايا الـ JE وتحتها حزم ألياف الكولاجين العمودية بالملاط.",
        whyIq: "هذا الختم المزدوج هو اللي يعزل العظم الحساس عن البيئة الفموية؛ واسمه الحديث هو Supra-crestal attachment tissue.",
        tipIq: "الـ Biologic width (المصطلح المحدث: Supra-crestal attachment tissue) يمتد من قاع الـ OSE لقمة العظم ويبلغ 2 mm (منها 0.5–1 mm JE).",
        tipEn: "Biologic width (updated term: supra-crestal attachment tissue) = ~2 mm from bottom of OSE to alveolar bone crest (0.5–1 mm is JE)."
      },
      {
        id: "sc-je-portion",
        labelAr: "2. حصة الـ JE (0.5–1 ملم) مقارنة بالنسيج الضام",
        badgeEn: "JE 0.5–1 mm vs CT Component",
        duration: 8,
        focus: { cx: 0.48, cy: 0.42, scale: 1.4 },
        highlightTargetId: "t2",
        defaultParam: 40,
        seeIq: "العدسة تقترب من الجزء العلوي الملون حيث تشغل الـ JE نصف المسافة أو أقل فوق حزم النسيج الضام الكثيفة.",
        whyIq: "الـ CT بالسن الطبيعي قوي جداً لأنه منغرس عمودياً في الملاط وهذا اللي يحفظ ثبات الـ 2 ملم.",
        tipIq: "احفظ الرقم: 0.5–1 mm للـ JE من أصل 2 mm مجموع العرض البيولوجي للسن الطبيعي.",
        tipEn: "Approximately 0.5–1 mm of the 2 mm natural tooth biologic width is junctional epithelium (JE)."
      }
    ],
    drawOverlay(ctx, _w, _h, _t, st, toPx, h2) {
      const yEnd = 0.34 + (st.paramVal / 100) * 0.26;
      h2.drawFixedGuide(ctx, toPx(0.45, 0.34), toPx(0.45, yEnd), `${(0.5 + (st.paramVal / 100) * 1.5).toFixed(1)} mm`, "#FBBF24", false);
    }
  },

  "p4-t1": {
    topicId: "p4-t1",
    simId: "p4-pie-formation",
    imageUrl: "./src/assets/images/p4_t1_pie_formation_1795710173357.jpg",
    supportsXray: false,
    imageAlt: "Histological cross-section of oral mucosa healing around a titanium dental implant forming PISE and PIE from OE within 2 to 3 weeks",
    hudTitleAr: "تشكل الظهارة حول الزرعة (PIE) من الـ OE خلال 2–3 أسابيع",
    hudBadgeEn: "PIE + PISE + OE · Originates from OE in 2–3 Weeks",
    interactiveParam: {
      labelAr: "الزمن بعد وضع الزرعة (نضوج وتشكل الـ PIE):",
      minLabel: "اليوم الأول",
      maxLabel: "3 أسابيع (اكتمال)",
      defaultVal: 85,
      formatReadout: (v) => {
        const wks = ((v / 100) * 3).toFixed(1);
        return v >= 67
          ? { text: `اكتمال تشكل الـ PIE من OE (${wks} أسابيع)`, tone: "ok" }
          : { text: `طور هجرة الظهارة (${wks} أسابيع)`, tone: "info" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.32, y: 0.24 },
      p1: { x: 0.68, y: 0.68 },
      handleLabel: "تتبع هجرة الخلايا من OE للـ PIE"
    },
    targets: [
      {
        id: "t1",
        labelAr: "الظهارة الفموية (OE)",
        titleEn: "Oral Epithelium (OE)",
        descIq: "المصدر الأم الذي تنمو وتهاجر منه خلايا الظهارة حول الزرعة خلال 2–3 أسابيع.",
        syncKeywords: ["forms from the OE", "2–3 weeks"],
        posPct: { x: 24, y: 36 },
        color: "#FBBF24"
      },
      {
        id: "t2",
        labelAr: "ظهارة الأخدود (PISE)",
        titleEn: "Peri-Implant Sulcular Epithelium (PISE)",
        descIq: "الجزء المبطن للأخدود حول الزرعة وتناظر الـ OSE في السن الطبيعي.",
        syncKeywords: ["PISE", "3 types"],
        posPct: { x: 46, y: 35 },
        color: "#38BDF8"
      },
      {
        id: "t3",
        labelAr: "الظهارة حول الزرعة (PIE)",
        titleEn: "Peri-Implant Epithelium (PIE)",
        descIq: "تؤدي وظيفة التصاق ظهاري مشابهة للـ JE وتشكل الختم الملامس للتيتانيوم.",
        syncKeywords: ["comparable to the JE", "PIE performs"],
        posPct: { x: 67, y: 58 },
        color: "#2DD4BF"
      }
    ],
    scenarios: [
      {
        id: "sc-pie-origin",
        labelAr: "1. تشكل الـ PIE من الظهارة الفموية (2–3 أسابيع)",
        badgeEn: "PIE Originates from OE in 2–3 Weeks",
        duration: 8,
        focus: { cx: 0.48, cy: 0.48, scale: 1 },
        highlightTargetId: "t3",
        defaultParam: 85,
        seeIq: "شوف النسيج الوردي شلون دا يلتف من الحافة الخارجية OE وينزل على طول معدن التيتانيوم الرمادي ليكوّن PISE وبعدين PIE.",
        whyIq: "الزرعة ما عدها بقايا نسيج مينا جنيني مثل السن الطبيعي فالجسم يستخدم خلايا الـ OE الخارجية لبناء ختم جديد خلال 2–3 أسابيع.",
        tipIq: "الـ PIE تؤدي وظيفة التصاق مشابهة للـ JE وتتشكل من الـ OE خلال 2–3 weeks بعد الزراعة.",
        tipEn: "Peri-implant junction = PIE + PISE + OE. PIE performs similar attachment function to JE and forms from OE within 2–3 weeks after implantation."
      },
      {
        id: "sc-pie-seal",
        labelAr: "2. مقارنة أسماء الطبقات الثلاث: PIE و PISE و OE",
        badgeEn: "Peri-Implant Epithelial Nomenclature",
        duration: 8,
        focus: { cx: 0.56, cy: 0.5, scale: 1.25 },
        highlightTargetId: "t2",
        defaultParam: 95,
        seeIq: "بالعمق قرب العظم تلتصق خلايا رقيقة (PIE) بسطح التيتانيوم بينما بالأعلى يبطن الأخدود (PISE) ومن الخارج (OE).",
        whyIq: "حفظ التسميات الدقيقة يمنع الخلط بالامتحان بين أنسجة السن (JE و OSE) وأنسجة الزرعة (PIE و PISE).",
        tipIq: "مثل ما السن عنده JE و OSE الزرعة عدها PIE و PISE مع بقاء الـ OE بنفس الاسم بالجهتين.",
        tipEn: "Tooth (OSE, JE, OE) corresponds directly to Implant landmarks (PISE, PIE, OE)."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const progress = 0.25 + (st.paramVal / 100) * 0.75;
      const p1 = toPx(0.28, 0.28);
      const p2 = toPx(0.45, 0.34);
      const p3 = toPx(0.68, 0.34 + progress * 0.38);
      h2.drawFlowTrack(ctx, [p1, p2, p3], t, "#2DD4BF", { width: 2.2, pulseCount: 2, showTip: true });
    }
  },

  "p4-t2": {
    topicId: "p4-t2",
    simId: "p4-biologic-width-implant",
    imageUrl: "./src/assets/images/p4_t2_biologic_width_implant_1795710173421.jpg",
    supportsXray: false,
    imageAlt: "Side-by-side comparison of 2 mm biologic width in natural tooth on the left versus 3 to 4 mm peri-implant biologic width on the right",
    hudTitleAr: "العرض البيولوجي حول الزرعة (3–4 ملم) مقابل السن (2 ملم)",
    hudBadgeEn: "Implant: 3–4 mm (2 mm PIE + 1–2 mm CT) vs Tooth: 2 mm",
    interactiveParam: {
      labelAr: "مقارنة الطول العمودي للعرض البيولوجي:",
      minLabel: "السن (2.0 mm)",
      maxLabel: "الزرعة (3.5–4.0 mm)",
      defaultVal: 80,
      formatReadout: (v) => {
        const mm = (2 + (v / 100) * 2).toFixed(1);
        return v >= 50
          ? { text: `عرض بيولوجي للزرعة (${mm} mm = 2mm PIE + CT)`, tone: "ok" }
          : { text: `عرض بيولوجي للسن الطبيعي (${mm} mm)`, tone: "info" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.62, y: 0.36 },
      p1: { x: 0.62, y: 0.62 },
      handleLabel: "قس طول العرض البيولوجي للزرعة"
    },
    targets: [
      {
        id: "t1",
        labelAr: "عرض السن الطبيعي (2 mm)",
        titleEn: "Natural Tooth Biologic Width (2 mm)",
        descIq: "أقصر من الزرعة لأن الألياف تنغرس بقوة بالملاط (0.5–1 mm JE + CT).",
        syncKeywords: ["natural tooth", "slightly longer"],
        posPct: { x: 42, y: 46 },
        color: "#38BDF8"
      },
      {
        id: "t2",
        labelAr: "الـ PIE بالزرعة (2 mm)",
        titleEn: "2 mm PIE Component",
        descIq: "الجزء الظهاري حول الزرعة يبلغ وحده 2 ملم أي أطول من الـ JE بالسن.",
        syncKeywords: ["2 mm", "PIE"],
        posPct: { x: 64, y: 42 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "النسيج الضام بالزرعة (1–2 mm)",
        titleEn: "1 to 2 mm Connective Tissue",
        descIq: "يمتد أسفل الـ PIE وحتى قمة العظم السنخي بألياف موازية للسطح.",
        syncKeywords: ["1 to 2 mm", "3–4 mm"],
        posPct: { x: 64, y: 56 },
        color: "#2DD4BF"
      }
    ],
    scenarios: [
      {
        id: "sc-compare-bw",
        labelAr: "1. فرق الطول: 2 ملم في السن مقابل 3–4 ملم في الزرعة",
        badgeEn: "2 mm vs 3–4 mm Biologic Width",
        duration: 8,
        focus: { cx: 0.5, cy: 0.48, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 80,
        seeIq: "قارن بعينك بين اليمين واليسار: الـ Biologic width على جهة الزرعة أطول بشكل واضح من جهة السن الطبيعي.",
        whyIq: "لأن التصاق اللثة بالتيتانيوم أضعف من التصاقها بالملاط يحتاج الجسم مسافة أطول (3–4 ملم) لبناء ختم يحمي العظم.",
        tipIq: "العرض البيولوجي حول الزرعة يبلغ 3–4 mm (يتقسم إلى 2 mm PIE و 1 to 2 mm C.T.) وهو أطول من السن الطبيعي.",
        tipEn: "Biologic width around implant = 3–4 mm (2 mm PIE + 1 to 2 mm C.T.), slightly longer than around natural tooth (2 mm)."
      },
      {
        id: "sc-pie-ct-split",
        labelAr: "2. تقسيم الـ 3–4 ملم (2 ملم PIE + 1–2 ملم CT)",
        badgeEn: "2 mm PIE + 1–2 mm CT Breakdown",
        duration: 8,
        focus: { cx: 0.68, cy: 0.49, scale: 1.32 },
        highlightTargetId: "t3",
        defaultParam: 90,
        seeIq: "التركيز على جانب الزرعة يوضح المنطقة الظهارية البنفسجية العلوية (2 ملم) فوق منطقة النسيج الضام السفلية (1–2 ملم).",
        whyIq: "حفظ هذا التقسيم يجاوب أي سؤال رقمي دقيق بالامتحان سواء سأل عن الكل (3–4) أو عن الجزء (2 للـ PIE و 1–2 للـ CT).",
        tipIq: "الـ PIE بالزرعة وحدها 2 mm بينما الـ JE بالسن 0.5–1 mm فقط.",
        tipEn: "Implant PIE alone is 2 mm plus 1–2 mm connective tissue, totaling 3–4 mm biologic width."
      }
    ],
    drawOverlay(ctx, _w, _h, _t, st, toPx, h2) {
      h2.drawFixedGuide(ctx, toPx(0.41, 0.39), toPx(0.41, 0.52), "2 mm Tooth", "#38BDF8", true);
      const yBot = 0.36 + (st.paramVal / 100) * 0.25;
      h2.drawFixedGuide(ctx, toPx(0.61, 0.36), toPx(0.61, yBot), `${(2 + (st.paramVal / 100) * 2).toFixed(1)} mm Implant`, "#FBBF24", false);
    }
  },

  "p5-t1": {
    topicId: "p5-t1",
    simId: "p5-pie-thin-layer",
    imageUrl: "./src/assets/images/p5_t1_pie_thin_layer_1795710174604.jpg",
    supportsXray: false,
    imageAlt: "High-magnification histology of thin 3 to 4 cell layer peri-implant epithelium contacting titanium body below inflamed abutment junction",
    hudTitleAr: "رقة طبقة الـ PIE (3–4 خلايا) وهجرتها نحو جسم الزرعة",
    hudBadgeEn: "Thin 3–4 Cell Layer · Abutment Inflammation Shift",
    interactiveParam: {
      labelAr: "شدة الالتهاب عند واجهة الدعامة وهبوط الـ PIE:",
      minLabel: "مباشرة بعد الوضع",
      maxLabel: "هبوط لجسم الزرعة",
      defaultVal: 70,
      formatReadout: (v) => v < 40
        ? { text: "تلامس الدعامة وجسم الزرعة معاً", tone: "ok" }
        : { text: "هبوط الـ PIE لتلامس الـ Implant Body فقط", tone: "warn" }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.72, y: 0.42 },
      p1: { x: 0.28, y: 0.85 },
      handleLabel: "تتبع تراجع الـ PIE للأسفل"
    },
    targets: [
      {
        id: "t1",
        labelAr: "ارتشاح التهابي قرب الواجهة",
        titleEn: "Abutment-Implant Interface Inflammation",
        descIq: "خلايا التهابية تتجمع قرب ملتقى الدعامة وجسم الزرعة وتسبب ذوبان عظمي مستمر.",
        syncKeywords: ["cause of inflammation", "bone resorption"],
        posPct: { x: 56, y: 38 },
        color: "#FB7185"
      },
      {
        id: "t2",
        labelAr: "طبقة الـ PIE (3–4 خلايا)",
        titleEn: "Thin 3–4 Cell PIE Layer",
        descIq: "مورفولوجياً تتكون الـ PIE من طبقة رقيقة جداً لا تتعدى 3 إلى 4 خلايا مسطحة.",
        syncKeywords: ["3–4 cells", "Morphologically"],
        posPct: { x: 46, y: 66 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "سطح جسم الزرعة",
        titleEn: "Implant Body Titanium Surface",
        descIq: "بسبب استمرار ذوبان العظم تقتصر ملامسة الـ PIE غالباً على جسم الزرعة وحده.",
        syncKeywords: ["implant body", "abutment and body"],
        posPct: { x: 64, y: 78 },
        color: "#2DD4BF"
      }
    ],
    scenarios: [
      {
        id: "sc-34cells",
        labelAr: "1. البنية الخلوية الرقيقة (3–4 خلايا فقط)",
        badgeEn: "Morphology: 3–4 Cell Layer Thickness",
        duration: 8,
        focus: { cx: 0.48, cy: 0.65, scale: 1.25 },
        highlightTargetId: "t2",
        defaultParam: 70,
        seeIq: "عد بعينك عدد طبقات الخلايا البنفسجية الملاصقة للمعدن الأسود جوا: مجرد 3 إلى 4 صفوف خلايا رقيقة جداً!",
        whyIq: "هاي السماكة القليلة تفسرلنا ليش الـ PIE نسيج حساس وما يتحمل القوة الزائدة أو السبر العنيف.",
        tipIq: "مورفولوجياً تتكون الـ PIE من طبقة رقيقة جداً من 3–4 خلايا (Thin layer of 3–4 cells).",
        tipEn: "Morphologically, PIE is composed of a thin layer of 3–4 cells."
      },
      {
        id: "sc-shift-body",
        labelAr: "2. التحول من ملامسة الدعامة إلى جسم الزرعة فقط",
        badgeEn: "Inflammation-Driven Apical Shift",
        duration: 8,
        focus: { cx: 0.52, cy: 0.5, scale: 1 },
        highlightTargetId: "t1",
        defaultParam: 85,
        seeIq: "فوك بالمقطع تشوف الخلايا الالتهابية الزرقاء عند منطقة الالتقاء ومع استمرارها تنزلق الـ PIE للأسفل على جسم التيتانيوم.",
        whyIq: "بالبداية تلامس اللثة الدعامة والجسم معاً لكن التهاب واجهة الدعامة-الزرعة يسبب ذوبان عظم فتبقى الـ PIE على الجسم فقط.",
        tipIq: "بعد الوضع مباشرة تلامس اللثة الـ Abutment والـ Body؛ لاحقاً تلامس الـ PIE جسم الزرعة فقط بسبب ذوبان العظم الالتهابي.",
        tipEn: "Immediately contacting abutment & body, PIE later often contacts only the implant body due to bone resorption from interface inflammation."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const pStart = toPx(0.74, 0.44);
      const pEnd = toPx(0.74 - (st.paramVal / 100) * 0.46, 0.44 + (st.paramVal / 100) * 0.42);
      h2.drawFlowTrack(ctx, [pStart, pEnd], t, "#FB7185", { width: 2.2, pulseCount: 2, showTip: true });
      h2.drawFocusAperture(ctx, { x: 0.52, y: 0.52 }, 0.28, 0.32);
    }
  },

  "p5-t2": {
    topicId: "p5-t2",
    simId: "p5-microgap-resorption",
    imageUrl: "./src/assets/images/p5_t2_microgap_resorption_1795710265474.jpg",
    xrayImageUrl: "./src/assets/images/p5_t2_xray_1795710267011.jpg",
    supportsXray: true,
    imageAlt: "Three-stage diagram of micro-gap effect: implant placed at bone crest, vertical bone resorption near micro-gap, and bone reduced lower than PIE",
    hudTitleAr: "تأثير الـ Micro-Gap وذوبان العظم العمودي (Fig. 3)",
    hudBadgeEn: "Stage (a) Placement → (b) Micro-Gap Resorption → (c) Stabilization",
    interactiveParam: {
      labelAr: "تتبع مراحل ذوبان العظم حول الـ Micro-Gap (a → b → c):",
      minLabel: "المرحلة (a) البداية",
      maxLabel: "المرحلة (c) الاستقرار",
      defaultVal: 65,
      formatReadout: (v) => {
        if (v < 33) return { text: "(a) الزرعة بنفس مستوى العظم السنخي", tone: "ok" };
        if (v < 68) return { text: "(b) ذوبان قرب الـ Micro-Gap لخلق فراغ للـ PIE", tone: "warn" };
        return { text: "(c) ثبات العظم أسفل الـ PIE للوقاية من العدوى", tone: "info" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.16, y: 0.34 },
      p1: { x: 0.84, y: 0.34 },
      handleLabel: "اسحب عبر المراحل (a → b → c)"
    },
    targets: [
      {
        id: "t1",
        labelAr: "المرحلة (a): وضع بمستوى العظم",
        titleEn: "Stage (a): Bone-Level Placement",
        descIq: "وضع الزرعة بنفس مستوى العظم السنخي المحيط وعندها تقع الفجوة الدقيقة على العظم مباشرة.",
        syncKeywords: ["same level", "Placement of implant"],
        posPct: { x: 16, y: 34 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "المرحلة (b): ذوبان قرب الفجوة",
        titleEn: "Stage (b): Micro-Gap Resorption",
        descIq: "الذوبان العظمي قرب الفجوة الدقيقة (مصدر العدوى) يخلق مساحة لتتشكل الـ PIE وترتبط بالزرعة.",
        syncKeywords: ["micro-gap", "source of infection"],
        posPct: { x: 50, y: 38 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "المرحلة (c): انخفاض العظم أسفل الـ PIE",
        titleEn: "Stage (c): Bone Reduced Lower Than PIE",
        descIq: "لأجل الوقاية من العدوى ينخفض العظم بالكامل لمستوى أدنى من الـ PIE ويستقر العرض البيولوجي.",
        syncKeywords: ["infection prevention", "lower than peri-implant"],
        posPct: { x: 84, y: 50 },
        color: "#FBBF24"
      }
    ],
    scenarios: [
      {
        id: "sc-microgap-seq",
        labelAr: "1. التسلسل البيولوجي الثلاثي (a → b → c)",
        badgeEn: "Fig. 3 Micro-Gap Remodeling Sequence",
        duration: 8,
        focus: { cx: 0.5, cy: 0.45, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 65,
        seeIq: "شوف اللوحات الثلاث من اليسار لليمين: بالبداية العظم لازك بالفجوة بعدين بالوسط تصير التهابات ويذوب عمودياً وباليمين ينزل العظم جوا الـ PIE ويستقر.",
        whyIq: "الفجوة الدقيقة (Micro-gap) بين الدعامة والزرعة ممكن تسرب بكتيريا؛ فالعظم يتراجع حتى ينطي مساحة لختم الظهارة والنسيج الضام يغطونه.",
        tipIq: "المرحلة (c) بالـ Fig. 3: على مبدأ الوقاية من العدوى (Infection prevention) ينخفض العظم كله أسفل مستوى الـ PIE.",
        tipEn: "Fig. 3: (a) Bone-level placement → (b) Resorption near micro-gap (source of infection) makes space for PIE → (c) Bone reduced lower than PIE."
      },
      {
        id: "sc-xray-microgap",
        labelAr: "2. التغيرات العظمية في الأشعة السينية المتعاقبة",
        badgeEn: "Sequential Radiographic Bone Remodeling",
        duration: 8,
        focus: { cx: 0.5, cy: 0.45, scale: 1.15 },
        highlightTargetId: "t3",
        defaultParam: 90,
        xraySuggested: true,
        seeIq: "في سلسلة الأشعة تشوف تدرج مستوى العظم العتمي من خط المنصة بالصورة الأولى إلى هبوطه المتوازن بالصورة الثالثة.",
        whyIq: "هذا الهبوط العمودي يحدد عملياً مكان استقرار العرض البيولوجي (Biological width) حول الزرعة.",
        tipIq: "بعد ذوبان العظم يتشكل ختم الظهارة والنسيج الضام فوك العظم وهو اللي يحدد الـ Biological width.",
        tipEn: "An epithelial and connective tissue seal forms on the bone around the implant, which determines the biological width."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const cx = 0.16 + (st.paramVal / 100) * 0.68;
      h2.drawFocusAperture(ctx, { x: cx, y: 0.42 }, 0.18, 0.36);
      h2.drawFlowTrack(ctx, [toPx(0.22, 0.34), toPx(0.45, 0.34), toPx(0.78, 0.34)], t, "#FBBF24", { width: 1.8, pulseCount: 2, showTip: true });
    }
  },

  "p6-t1": {
    topicId: "p6-t1",
    simId: "p6-implant-probing",
    imageUrl: "./src/assets/images/p6_t1_implant_probing_1795710266717.jpg",
    supportsXray: false,
    imageAlt: "Clinical photograph of a fine millimeter periodontal probe gently entering the peri-implant sulcus beside an implant crown",
    hudTitleAr: "ضعف قدرة الختم للـ PIE وضبط قوة المسبار اللثوي",
    hudBadgeEn: "Lower Sealing Capacity · Gentle Probing Force",
    interactiveParam: {
      labelAr: "قوة الضغط بالمسبار اللثوي (Probing Force Control):",
      minLabel: "خفيفة (آمنة)",
      maxLabel: "عنيفة (اختراق الختم)",
      defaultVal: 28,
      formatReadout: (v) => {
        if (v <= 40) return { text: "قوة خفيفة لا تتجاوز السن الطبيعي (آمنة)", tone: "ok" };
        if (v <= 70) return { text: "بداية ضغط على الختم الظهاري الهش", tone: "info" };
        return { text: "قوة زائدة تمزق ختم الـ PIE وتخترق العمق", tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.52, y: 0.34 },
      p1: { x: 0.42, y: 0.77 },
      handleLabel: "تحكم بضغط المسبار"
    },
    targets: [
      {
        id: "t1",
        labelAr: "رأس المسبار اللثوي",
        titleEn: "Periodontal Probe Tip",
        descIq: "يجب استخدامه بحذر شديد حول مواقع الزرعات وبقوة لا تزيد عن الأسنان الطبيعية.",
        syncKeywords: ["probing implant", "periodontal probe"],
        posPct: { x: 42, y: 74 },
        color: "#FBBF24"
      },
      {
        id: "t2",
        labelAr: "الختم الظهاري الهش (PIE)",
        titleEn: "Weak Functional Sealing Capacity",
        descIq: "الـ PIE عدها قدرة ختم وظيفية أقل بوايد من الـ JE رغم تشابههما المجهري.",
        syncKeywords: ["lower functional sealing", "despite"],
        posPct: { x: 48, y: 69 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "مقياس المليمتر",
        titleEn: "Light Force Calibration",
        descIq: "القوة المطبقة يجب ألا تتجاوز القوة المستخدمة عند فحص مواقع الأسنان الطبيعية.",
        syncKeywords: ["probing force", "natural tooth sites"],
        posPct: { x: 51, y: 47 },
        color: "#2DD4BF"
      }
    ],
    scenarios: [
      {
        id: "sc-probing-care",
        labelAr: "1. ضعف الختم الوظيفي والحذر بالمسبار",
        badgeEn: "Lower Functional Seal Requires Care",
        duration: 8,
        focus: { cx: 0.48, cy: 0.62, scale: 1.15 },
        highlightTargetId: "t2",
        defaultParam: 28,
        seeIq: "شوف رأس المسبار المعدني المرقّم وهو داخل بلطف يم حافة اللثة حول التاج الخزفي.",
        whyIq: "رغم إن شكل الـ PIE يشبه الـ JE تحت المجهر إلا إن كفاءة ختمها الوظيفية أضعف بكثير فتتأذى بسهولة من الضغط.",
        tipIq: "الـ PIE عدها قدرة ختم وظيفية أقل بكثير من الـ JE رغم تشابههم بالتركيب لذلك لازم نكون حذرين أثناء الـ Probing.",
        tipEn: "PIE has a much lower functional sealing capacity than JE despite similar epithelial structures; take care while probing."
      },
      {
        id: "sc-force-limit",
        labelAr: "2. قاعدة عدم تجاوز قوة فحص السن الطبيعي",
        badgeEn: "Force <= Natural Tooth Probing Force",
        duration: 8,
        focus: { cx: 0.45, cy: 0.68, scale: 1.35 },
        highlightTargetId: "t3",
        defaultParam: 22,
        seeIq: "المسبار يوقف بلطف على عمق الأخدود الصحي بدون أن يجبر الأنسجة الرخوة على النزف أو الانفتاح.",
        whyIq: "الضغط الزائد يغرز المسبار للعمق ويؤذي الختم الضام الموازي الموجود أسفل الـ PIE.",
        tipIq: "قاعدة عيادية: قوة السبر (Probing force) حول الزرعة لازم ما تزيد عن القوة المطبقة على السن الطبيعي.",
        tipEn: "The probing force around implant sites should be no more than that applied on natural tooth sites."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const pTop = toPx(0.54, 0.3);
      const pTip = toPx(0.42, 0.68 + (st.paramVal / 100) * 0.12);
      h2.drawFlowTrack(ctx, [pTop, pTip], t, st.paramVal > 65 ? "#FB7185" : "#2DD4BF", { width: 2, pulseCount: 2, showTip: true });
      if (st.paramVal > 65) {
        h2.drawShockRings(ctx, pTip.x, pTip.y, t, 24, "#FB7185");
      }
    }
  },

  "p6-t2": {
    topicId: "p6-t2",
    simId: "p6-laminin-em",
    imageUrl: "./src/assets/images/p6_t2_laminin_em_1795710247118.jpg",
    supportsXray: false,
    imageAlt: "Scientific composite showing immunohistochemistry Laminin-322 light microscopy and 150 nm transmission electron microscopy of JE vs PIE",
    hudTitleAr: "تصبيغ Laminin-322 والمجهر الإلكتروني لواجهة الختم (Fig. 2)",
    hudBadgeEn: "Laminin-322 Dual Layer (LD + LL) · Hemi-Desmosomes (HD)",
    interactiveParam: {
      labelAr: "مستوى تعبير Laminin-322 والـ Hemi-desmosomes:",
      minLabel: "أعلى الزرعة (شحيح)",
      maxLabel: "السن الطبيعي (مكتمل)",
      defaultVal: 82,
      formatReadout: (v) => v >= 55
        ? { text: "طبقة مزدوجة واضحة (LD + LL) مع HD", tone: "ok" }
        : { text: "غياب الطبقة المزدوجة بالجزء العلوي للـ PIE", tone: "warn" }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.56, y: 0.72 },
      p1: { x: 0.56, y: 0.3 },
      handleLabel: "قارن المجهر الإلكتروني أعلى وأسفل"
    },
    targets: [
      {
        id: "t1",
        labelAr: "Laminin-322 بالسن (JE)",
        titleEn: "Strong Ln Staining in Natural JE",
        descIq: "الخط الأخضر القوي على واجهة السن يثبت التعبير الكامل لـ Laminin-322 (مقياس Bar = 20 mm).",
        syncKeywords: ["Laminin-322", "20 mm"],
        posPct: { x: 18, y: 24 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "نقص Ln أعلى واجهة الزرعة",
        titleEn: "Scarce Upper Implant-PIE Staining",
        descIq: "بروتين Ln كان تعبيره شحيحاً جداً بالجزء العلوي من واجهة الزرعة والـ PIE.",
        syncKeywords: ["scarcely expressed", "upper portion"],
        posPct: { x: 18, y: 66 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "الطبقة المزدوجة (LD + LL) و HD",
        titleEn: "Dual Layer (LD + LL) & Hemi-Desmosomes",
        descIq: "بالمجهر الإلكتروني (Bar = 150 nm) تظهر بالسن طبقة مزدوجة (LD و LL) وأنصاف الجسيمات الرابطة (HD).",
        syncKeywords: ["lamina densa", "hemi-desmosome"],
        posPct: { x: 62, y: 34 },
        color: "#FBBF24"
      },
      {
        id: "t4",
        labelAr: "غياب الطبقة المزدوجة بالزرعة",
        titleEn: "Absent Dual Layer in Upper PIE",
        descIq: "رؤوس الأسهم السودة باللوحة السفلية تشير لمناطق اختفاء الطبقة المزدوجة قرب سطح التيتانيوم.",
        syncKeywords: ["not apparent", "Black arrowheads"],
        posPct: { x: 64, y: 74 },
        color: "#38BDF8"
      }
    ],
    scenarios: [
      {
        id: "sc-ihc-ln",
        labelAr: "1. التصبيغ المناعي بـ Laminin-322 (Bar = 20 mm)",
        badgeEn: "Light Microscopy Anti-Rat Ln g2 Staining",
        duration: 8,
        focus: { cx: 0.2, cy: 0.5, scale: 1.25 },
        highlightTargetId: "t2",
        defaultParam: 35,
        seeIq: "باللوحة اليسرى العلوية شوف الخط الفسفوري الواضح للـ Laminin-322 حول السن؛ وبالمقابل بالأسفل يضعف ويختفي بأعلى واجهة الزرعة.",
        whyIq: "بروتين Laminin-322 هو الغراء الجزيئي اللي يلزك الظهارة بالسطح؛ شحته بأعلى واجهة الـ PIE تفسر ضعف الختم.",
        tipIq: "في Fig. 2: تم التصبيغ بمضاد anti-rat Laminin-322 g2 chain وكان Ln شحيحاً (Scarcely expressed) بالجزء العلوي من واجهة الزرعة.",
        tipEn: "Stained with anti-rat Laminin-322 (Ln) g2 chain + hematoxylin; Ln was scarcely expressed along upper implant-PIE interface (Bar = 20 mm)."
      },
      {
        id: "sc-tem-150nm",
        labelAr: "2. المجهر الإلكتروني (Bar = 150 nm): LD و LL و HD",
        badgeEn: "Electron Microscopy (150 nm) Ultrastructure",
        duration: 8,
        focus: { cx: 0.64, cy: 0.5, scale: 1.15 },
        highlightTargetId: "t3",
        defaultParam: 88,
        seeIq: "باليمين تحت المجهر الإلكتروني تشوف باللوحة العليا صف من الأقواس الداكنة (HD) وخطين متوازيين (LD و LL) مقابل نقصهم الشديد باللوحة السفلى.",
        whyIq: "الأسهم الكاملة تدل على الطبقة المزدوجة (LD و LL) والأسهم السودة على اختفائها والبيضة على الـ hemi-desmosome-like structures.",
        tipIq: "الأسهم في Fig. 2: الأسهم = Dual layer (LD + LL) · رؤوس الأسهم السودة = غياب الطبقة المزدوجة · البيضة = HD.",
        tipEn: "EM (Bar = 150 nm): Arrows = dual Ln layer (lamina densa & lamina lucida) · Black arrowheads = absent dual layer · White = hemi-desmosome-like."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const yFocus = st.paramVal > 55 ? 0.34 : 0.72;
      h2.drawFocusAperture(ctx, { x: 0.58, y: yFocus }, 0.26, 0.32);
      h2.drawFlowTrack(ctx, [toPx(0.45, 0.35), toPx(0.75, 0.28)], t, "#FBBF24", { width: 1.6, pulseCount: 2, dashed: true });
    }
  },

  "p7-t1": {
    topicId: "p7-t1",
    simId: "p7-collagen-fibers",
    imageUrl: "./src/assets/images/p7_t1_collagen_fibers_1795710267229.jpg",
    supportsXray: false,
    imageAlt: "Histological split comparison showing perpendicular collagen fibers inserting into tooth cementum on the left vs parallel collagen fibers along titanium implant on the right",
    hudTitleAr: "اتجاه ألياف الكولاجين: عمودية بالسن vs موازية بالزرعة",
    hudBadgeEn: "Perpendicular (Cementum/PDL) vs Parallel (No Cementum/PDL)",
    interactiveParam: {
      labelAr: "زاوية انغراس ألياف الكولاجين بالنسبة للسطح:",
      minLabel: "موازية 0° (زرعة)",
      maxLabel: "عمودية 90° (سن)",
      defaultVal: 15,
      formatReadout: (v) => {
        const deg = Math.round((v / 100) * 90);
        return deg >= 55
          ? { text: `ألياف عمودية مقاومة للبكتيريا (${deg}° سن طبيعي)`, tone: "ok" }
          : { text: `ألياف موازية ضعيفة الختم (${deg}° زرعة سنية)`, tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "arc",
      center: { x: 0.72, y: 0.48 },
      rx: 0.14,
      ry: 0.22,
      startAngle: -1.45,
      spanAngle: 1.4,
      handleLabel: "غيّر زاوية الألياف 0° ↔ 90°"
    },
    targets: [
      {
        id: "t1",
        labelAr: "ألياف عمودية بالملاط (السن)",
        titleEn: "Perpendicular Fibers (Natural Tooth)",
        descIq: "في السن الطبيعي ألياف الكولاجين عمودية على سطح الجذر وتنغرس بالملاط لصد البكتيريا.",
        syncKeywords: ["perpendicular", "cementum"],
        posPct: { x: 24, y: 46 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "ألياف موازية للزرعة",
        titleEn: "Parallel Fibers (Dental Implant)",
        descIq: "حول الزرعات تمتد الألياف من العظم وتمشي بشكل موازٍ لسطح التيتانيوم بدون انغراس.",
        syncKeywords: ["runs parallel", "extend from the bone"],
        posPct: { x: 69, y: 38 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "غياب الملاط والـ PDL",
        titleEn: "Absence of Cementum & PDL",
        descIq: "غياب الملاط والرباط السنخي حول الزرعة هو السبب الجذري لهذا الاختلاف في نمط الالتصاق.",
        syncKeywords: ["absence of cementum", "fundamentally different"],
        posPct: { x: 80, y: 60 },
        color: "#FBBF24"
      }
    ],
    scenarios: [
      {
        id: "sc-perpendicular",
        labelAr: "1. السن الطبيعي: جدار كولاجين عمودي بالملاط",
        badgeEn: "Natural Tooth: Perpendicular Insertion",
        duration: 8,
        focus: { cx: 0.28, cy: 0.48, scale: 1.2 },
        highlightTargetId: "t1",
        defaultParam: 90,
        seeIq: "شوف الحزم الزرقاء على اليسار شلون داخلة بزاوية 90 درجة مباشرة جوا طبقة الملاط الفاتحة مثل المسامير!",
        whyIq: "هذا الالتصاق الضام أسفل الـ JE يمنع البكتيريا فيزيائياً من التسلل للعظم بفضل الترابط بين الـ PDL والملاط.",
        tipIq: "بالسن الطبيعي: الـ CT attachment يقع أسفل الـ JE وتكون الألياف عمودية (Perpendicular) على سطح الجذر.",
        tipEn: "Natural tooth CT attachment is apical to JE, resisting bacterial invasion with fibers perpendicular to cementum/root surface."
      },
      {
        id: "sc-parallel",
        labelAr: "2. الزرعة السنية: ألياف موازية لغياب الملاط والـ PDL",
        badgeEn: "Dental Implant: Parallel Fibers (Fig. 4a)",
        duration: 8,
        focus: { cx: 0.72, cy: 0.48, scale: 1.2 },
        highlightTargetId: "t2",
        defaultParam: 10,
        seeIq: "على اليمين الألياف البنفسجية طالعة من قمة العظم وماشية بالطول بمحاذاة عمود التيتانيوم الأسود بدون ما تنغرس بيه.",
        whyIq: "لأن ماكو لا Cementum ولا PDL حول الزرعة ما تكدر الألياف تغرز نفسها بالمعدن فتبقى مسيرة بموازاة السطح.",
        tipIq: "بالامتحان: حول الزرعة تمشي الألياف بشكل موازي (Parallel) لسطح الزرعة بسبب غياب الـ Cementum والـ PDL.",
        tipEn: "Because of absence of cementum & PDL around implants, collagen fibers extend from bone and run parallel to the implant surface (Fig. 4a)."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const angRad = (st.paramVal / 100) * (Math.PI * 0.5);
      h2.drawFixedAngleArc(ctx, toPx(0.72, 0.48), -Math.PI * 0.5, -Math.PI * 0.5 + angRad, 38, `${Math.round((st.paramVal / 100) * 90)} deg`, "#FBBF24");
      h2.drawFlowTrack(ctx, [toPx(0.68, 0.58), toPx(0.64, 0.22)], t, "#38BDF8", { width: 2, pulseCount: 2 });
    }
  },

  "p7-t2": {
    topicId: "p7-t2",
    simId: "p7-blood-vessels",
    imageUrl: "./src/assets/images/p7_t2_blood_vessels_1795710268693.jpg",
    supportsXray: false,
    imageAlt: "Vascular split cross-section comparing rich triple-source periodontal blood vessels on the left versus reduced peri-implant blood vessels lacking PDL source on the right",
    hudTitleAr: "الانحسار الأفقي ومحدودية التروية الدموية حول الزرعة",
    hudBadgeEn: "Ample Flow (PDL + Periosteum + CT) vs Reduced CT-Only Flow",
    interactiveParam: {
      labelAr: "كثافة التروية الدموية وإمداد المغذيات للظهارة:",
      minLabel: "زرعة (محدودة)",
      maxLabel: "سن (ثلاثية المصدر)",
      defaultVal: 25,
      formatReadout: (v) => v >= 55
        ? { text: "تروية وفيرة (PDL + Periosteum + CT)", tone: "ok" }
        : { text: "تروية ومغذيات محدودة (بدون PDL)", tone: "warn" }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.78, y: 0.7 },
      p1: { x: 0.22, y: 0.7 },
      handleLabel: "قارن كثافة الأوعية الدموية"
    },
    targets: [
      {
        id: "t1",
        labelAr: "التروية الثلاثية بالسن",
        titleEn: "Ample Blood Flow (PDL + Periosteum + CT)",
        descIq: "السن الطبيعي يحصل على تدفق دموي وفير من الـ PDL والسمحاق والنسيج الضام.",
        syncKeywords: ["ample blood flow", "periosteum"],
        posPct: { x: 26, y: 50 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "أوعية الرباط السنخي (مفقودة بالزرعة)",
        titleEn: "PDL Vascular Source (Absent in Implant)",
        descIq: "الأوعية الصاعدة داخل فراغ الرباط تغذي السن وتختفي تماماً حول الزرعة المندمجة.",
        syncKeywords: ["periodontal ligament source", "limited supply"],
        posPct: { x: 42, y: 66 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "تروية الزرعة المحدودة",
        titleEn: "Reduced Peri-Implant Blood Supply",
        descIq: "تعتمد فقط على أوعية النسيج الضام من خارج العظم مما يعرض الـ PIE لنقص المغذيات ويسرع الانحسار.",
        syncKeywords: ["horizontal recession", "mainly from the connective"],
        posPct: { x: 74, y: 45 },
        color: "#FB7185"
      }
    ],
    scenarios: [
      {
        id: "sc-vascular-diff",
        labelAr: "1. التروية الغزيرة للسن مقابل المحدودة بالزرعة",
        badgeEn: "Triple Source vs Reduced Blood Supply (Fig. 4b)",
        duration: 8,
        focus: { cx: 0.5, cy: 0.52, scale: 1 },
        highlightTargetId: "t3",
        defaultParam: 25,
        seeIq: "قارن شبكة الشرايين الحمراء: على اليسار شبكة كثيفة تغذي اللثة من جوا الـ PDL ومن برة العظم؛ وعلى اليمين فروع قليلة جاية بس من برة!",
        whyIq: "النسيج الضام ما يحمي من البكتيريا بس بل يجيب مغذيات من الأوعية الدموية ولذلك تعاني الـ PIE من قلة المغذيات مقارنة بالـ JE.",
        tipIq: "السن يحصل على دم غزير من 3 مصادر (PDL + Periosteum + CT) بينما الزرعة تحصل على دم أقل من الـ CT وخارج العظم فقط.",
        tipEn: "Tooth has ample blood flow from PDL, periosteum & CT; implant soft tissue has reduced blood supply mainly from CT (no PDL source - Fig. 4b)."
      },
      {
        id: "sc-recession",
        labelAr: "2. تسارع الانحسار الأفقي ونقص المغذيات",
        badgeEn: "Horizontal Recession & Nutrient Deficit",
        duration: 8,
        focus: { cx: 0.7, cy: 0.45, scale: 1.3 },
        highlightTargetId: "t3",
        defaultParam: 20,
        seeIq: "التركيز على عنق الزرعة يبين قلة الأوعية باللثة الملتفة حول التاج وضعف النسيج الضام الموازي.",
        whyIq: "هذا النسيج الضام الضعيف قليل الختم قد يسرّع حدوث الانحسار اللثوي الأفقي (Horizontal recession) حول الزرعة.",
        tipIq: "ضعف النسيج الضام قليل الختم حول الزرعة يسرّع الـ Horizontal recession والـ PIE تعاني من limited supply of nutrients.",
        tipEn: "Weak poorly-sealing CT around implant may accelerate horizontal recession; PIE is disadvantaged by limited nutrient supply."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      h2.drawFlowTrack(ctx, [toPx(0.2, 0.8), toPx(0.24, 0.52), toPx(0.32, 0.34)], t, "#2DD4BF", { width: 2.2, pulseCount: 3 });
      h2.drawFlowTrack(ctx, [toPx(0.55, 0.78), toPx(0.75, 0.52)], t, "#FB7185", { width: 1.5, pulseCount: 1, dashed: true });
      if (st.paramVal < 40) {
        h2.drawFocusAperture(ctx, { x: 0.72, y: 0.46 }, 0.24, 0.32);
      }
    }
  },

  "p8-t1": {
    topicId: "p8-t1",
    simId: "p8-keratinized-mucosa",
    imageUrl: "./src/assets/images/p8_t1_keratinized_mucosa_1795710179920.jpg",
    supportsXray: false,
    imageAlt: "Clinical intraoral split comparison of implant surrounded by pale pink keratinized gingiva on the left vs red non-keratinized alveolar mucosa on the right",
    hudTitleAr: "اللثة المتقرنة حول الزرعة مقابل الغشاء غير المتقرن",
    hudBadgeEn: "Optimum OH Stability vs Mucosa-Only Susceptibility",
    interactiveParam: {
      labelAr: "مستوى النظافة الفموية (Oral Hygiene Quality):",
      minLabel: "إهمال تفريش",
      maxLabel: "تفريش مثالي Optimum OH",
      defaultVal: 45,
      formatReadout: (v) => v >= 70
        ? { text: "Optimum OH يضمن الثبات حتى مع قلة التقرن", tone: "ok" }
        : { text: "المخاطية غير المتقرنة عرضة لمشاكل الزرعة", tone: "warn" }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.72, y: 0.56 },
      p1: { x: 0.24, y: 0.56 },
      handleLabel: "قارن الزرعتين سريرياً"
    },
    targets: [
      {
        id: "t1",
        labelAr: "لثة متقرنة وردية ثابتة",
        titleEn: "Keratinized Attached Gingiva",
        descIq: "شريط وردي سميك ومستقر حول الدعامة يساعد المريض على التفريش بدون ألم.",
        syncKeywords: ["keratinized gingiva", "long-term stability"],
        posPct: { x: 24, y: 55 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "غشاء غير متقرن فقط",
        titleEn: "Nonkeratinized Mucosa Only",
        descIq: "الزرعات المحاطة بمخاطية غير متقرنة فقط تكون أكثر عرضة لمشاكل ما حول الزرعة.",
        syncKeywords: ["mucosa only", "more susceptible"],
        posPct: { x: 74, y: 58 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "الالتهاب عند قلة التفريش",
        titleEn: "Susceptibility Without Optimum OH",
        descIq: "عند غياب النظافة الفموية المثالية تتجمع الترسبات بسرعة حول الطوق المخاطي الأحمر.",
        syncKeywords: ["optimum OH", "peri-implant problems"],
        posPct: { x: 74, y: 46 },
        color: "#FBBF24"
      }
    ],
    scenarios: [
      {
        id: "sc-optimum-oh",
        labelAr: "1. شرط الـ Optimum OH واستقرار الزرعة",
        badgeEn: "Not a Prerequisite With Optimum OH",
        duration: 8,
        focus: { cx: 0.5, cy: 0.5, scale: 1 },
        highlightTargetId: "t1",
        defaultParam: 80,
        seeIq: "على اليسار لثة وردية متقرنة صحية تماماً؛ وعلى اليمين مخاطية حمراء متوذمة حول عنق الزرعة.",
        whyIq: "الدراسات السابقة أثبتت إن التقرن مو شرط إلزامي للثبات الطويل إذا التزم المريض بـ Optimum oral hygiene.",
        tipIq: "وجود أو غياب الـ keratinized gingiva مو prerequisite لنجاح الزرعة إذا أدى المريض optimum OH procedures.",
        tipEn: "Keratinized gingiva is NOT a prerequisite for long-term implant stability & success WHEN the patient performs optimum OH procedures."
      },
      {
        id: "sc-mucosa-only",
        labelAr: "2. قابلية المشاكل عند إحاطتها بمخاطية فقط",
        badgeEn: "Higher Susceptibility in Nonkeratinized Mucosa",
        duration: 8,
        focus: { cx: 0.72, cy: 0.52, scale: 1.3 },
        highlightTargetId: "t2",
        defaultParam: 30,
        seeIq: "عند التركيز على اليمين تشوف احمراراً واضحاً وبداية نزف وبلاك لعدم وجود حزام لثة متقرنة يحمي الزرعة.",
        whyIq: "بدون اللثة المتقرنة يكون الغشاء المخاطي متحركاً ورقيقاً فيتجمع البلاك وتزيد احتمالية مشاكل ما حول الزرعة.",
        tipIq: "الزرعات المحاطة بـ mucosa only (غير متقرنة) تكون أكثر قابلية (More susceptible) لمشاكل ما حول الزرعة.",
        tipEn: "However, implants surrounded by mucosa only (nonkeratinized) are more susceptible to peri-implant problems."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      if (st.paramVal < 60) {
        h2.drawShockRings(ctx, toPx(0.74, 0.54).x, toPx(0.74, 0.54).y, t, 26, "#FB7185");
      } else {
        h2.drawFocusAperture(ctx, { x: 0.25, y: 0.54 }, 0.22, 0.28);
      }
    }
  },

  "p8-t2": {
    topicId: "p8-t2",
    simId: "p8-soft-tissue-graft",
    imageUrl: "./src/assets/images/p8_t2_soft_tissue_graft_1795710179349.jpg",
    supportsXray: false,
    imageAlt: "Clinical photograph of soft tissue graft around a dental implant creating thick keratinized gingiva anchored to periosteum",
    hudTitleAr: "الارتباط بالسمحاق وألم التنظيف والترقيع اللثوي (Soft Tissue Grafting)",
    hudBadgeEn: "Collagen Anchorage to Periosteum · Grafting Relieves OH Pain",
    interactiveParam: {
      labelAr: "سمك الطعم اللثوي وتثبيته بالسمحاق:",
      minLabel: "نقص التقرن (ألم OH)",
      maxLabel: "طعم متقرن مثبت 100%",
      defaultVal: 85,
      formatReadout: (v) => v >= 55
        ? { text: "طعم متقرن مثبت بالسمحاق (بدون ألم تفريش)", tone: "ok" }
        : { text: "نقص نسيج متقرن يسبب ألم أثناء التفريش", tone: "warn" }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.5, y: 0.62 },
      p1: { x: 0.5, y: 0.42 },
      handleLabel: "راقب تثبيت الطعم اللثوي"
    },
    targets: [
      {
        id: "t1",
        labelAr: "طوق الطعم المتقرن",
        titleEn: "Soft Tissue Graft Collar",
        descIq: "الترقيع اللثوي (Soft tissue grafting) يبني شريطاً متيناً يخفف ألم وانزعاج التفريش.",
        syncKeywords: ["soft tissue grafting", "alleviated"],
        posPct: { x: 48, y: 53 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "ألياف الارتباط بالسمحاق",
        titleEn: "Collagen Fibers Anchored to Periosteum",
        descIq: "اللثة المتقرنة تكون مثبتة بقوة أكبر بألياف الكولاجين إلى السمحاق تحتها مقارنة بغير المتقرنة.",
        syncKeywords: ["firmly anchored", "periosteum"],
        posPct: { x: 56, y: 61 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "محيط الدعامة السليم",
        titleEn: "Pain-Free OH Margin",
        descIq: "بعد الترقيع يقدر المريض ينظف حول الدعامة بسهولة بدون ألم أو تراجع.",
        syncKeywords: ["pain and discomfort", "OH procedures"],
        posPct: { x: 49, y: 31 },
        color: "#38BDF8"
      }
    ],
    scenarios: [
      {
        id: "sc-anchorage",
        labelAr: "1. التثبيت القوي بالسمحاق مقابل ألم التفريش",
        badgeEn: "Periosteal Anchorage vs OH Discomfort",
        duration: 8,
        focus: { cx: 0.5, cy: 0.5, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 85,
        seeIq: "شوف شريط النسيج المتقرن الوردي السميك المحيط بالدعامة المعدنية والملتحم بقوة فوق السمحاق.",
        whyIq: "عند نقص النسيج المتقرن تتحرك اللثة ويا كل حركة فرشاة وتسبب ألماً وانزعاجاً للمريض فيترك التنظيف.",
        tipIq: "الـ Keratinized mucosa مثبتة بقوة بالـ collagen fibers للـ periosteum؛ وعند نقصها يشكو المريض من pain & discomfort وقت الـ OH.",
        tipEn: "Keratinized mucosa is firmly anchored by collagen fibers to underlying periosteum; lack of it causes pain & discomfort during OH."
      },
      {
        id: "sc-graft-cure",
        labelAr: "2. تخفيف الأعراض عبر الترقيع (Soft Tissue Grafting)",
        badgeEn: "Symptom Relief via Soft Tissue Grafting",
        duration: 8,
        focus: { cx: 0.49, cy: 0.48, scale: 1.28 },
        highlightTargetId: "t1",
        defaultParam: 92,
        seeIq: "التركيز على الطعم اللثوي الملتحم حول الزرعة يبين شلون صار طوق اللثة ثابتاً وجاهزاً للتفريش المريح.",
        whyIq: "تزويد المنطقة بنسيج متقرن عن طريق الترقيع يزيل الألم ويكسر حلقة تجمع البلاك.",
        tipIq: "علاج ألم وانزعاج التفريش الناتج عن نقص اللثة المتقرنة يكون عبر Soft tissue grafting.",
        tipEn: "Pain and discomfort symptoms during OH due to lack of keratinized tissue are alleviated via soft tissue grafting."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const pts = [toPx(0.38, 0.5), toPx(0.49, 0.58), toPx(0.62, 0.48)];
      h2.drawFlowTrack(ctx, pts, t, "#2DD4BF", { width: 2.2, pulseCount: 2 });
    }
  },

  "p9-t1": {
    topicId: "p9-t1",
    simId: "p9-pdl-vs-rigid-bone",
    imageUrl: "./src/assets/images/p9_t1_pdl_vs_rigid_bone_1795710246471.jpg",
    xrayImageUrl: "./src/assets/images/p9_t1_xray_1795710179846.jpg",
    supportsXray: true,
    imageAlt: "Biomechanical comparison between natural tooth cushioned by PDL on the left and rigid bone-integrated implant experiencing occlusal stress on the right",
    hudTitleAr: "غياب الـ PDL بالزرعة وعواقب خلل الإطباق على الوصلة والعظم",
    hudBadgeEn: "No Resilient Connection · Do Not Move · Stress Consequences",
    interactiveParam: {
      labelAr: "شدة الحمل الإطباقي المبكر (Premature Occlusal Contact):",
      minLabel: "إطباق متوازن 10%",
      maxLabel: "نقطة علو شديدة 100%",
      defaultVal: 78,
      formatReadout: (v) => {
        if (v < 35) return { text: "توزيع حمل متوازن بدون إجهاد", tone: "ok" };
        if (v < 70) return { text: "تركز ضغط في وصلة التاج والعظم", tone: "info" };
        return { text: "Occlusal Disharmony: ضرر بالوصلة أو العظم أو كليهما", tone: "warn" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.71, y: 0.16 },
      p1: { x: 0.71, y: 0.48 },
      handleLabel: "اضغط القوة الإطباقية على الزرعة"
    },
    targets: [
      {
        id: "t1",
        labelAr: "الرباط السنخي المرن (PDL)",
        titleEn: "Resilient PDL Cushion (Natural Tooth)",
        descIq: "السن الطبيعي يمتص الصدمة ويمكنه الانغراس أو التحرك البسيط لتعويض نقطة العلو.",
        syncKeywords: ["resilient connection", "intrude or migrate"],
        posPct: { x: 35, y: 62 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "وصلة التركيبة والزرعة",
        titleEn: "Restoration-to-Implant Connection",
        descIq: "أول موقع يتلقى عواقب خلل الإطباق لأن الزرعة والتركيبة لا تتحركان.",
        syncKeywords: ["restoration-to-implant", "do not move"],
        posPct: { x: 71, y: 38 },
        color: "#FBBF24"
      },
      {
        id: "t3",
        labelAr: "واجهة العظم والزرعة",
        titleEn: "Bone-to-Implant Interface",
        descIq: "غياب الـ PDL يركز الإجهاد مباشرة على العظم القشري المحيط بعنق الزرعة.",
        syncKeywords: ["bone-to-implant", "occlusal disharmony"],
        posPct: { x: 78, y: 52 },
        color: "#FB7185"
      }
    ],
    scenarios: [
      {
        id: "sc-rigid-load",
        labelAr: "1. غياب المرونة وعواقب الـ Occlusal Disharmony",
        badgeEn: "No PDL · Rigid Non-Movement Stress",
        duration: 8,
        focus: { cx: 0.52, cy: 0.46, scale: 1 },
        highlightTargetId: "t3",
        defaultParam: 78,
        seeIq: "شوف الفرق الواضح: السن باليسار مرتاح جوا وسادة الـ PDL الوردية؛ بينما الزرعة باليمين جامدة وتشتعل إجهاد أحمر عند البرغي وعرف العظم.",
        whyIq: "الزرعة لا تكدر تسوي Intrude ولا Migrate؛ فأي نقطة إطباق عالية تضرب يا إما وصلة التاج بالزرعة أو واجهة العظم بالزرعة أو ثنينهم.",
        tipIq: "غياب الـ PDL = No resilient connection. الزرعة ما تتحرك فأي Occlusal disharmony يضرب restoration-to-implant connection أو bone-to-implant interface أو both.",
        tipEn: "No PDL = no resilient connection; implants cannot intrude/migrate. Occlusal disharmony affects restoration-to-implant connection, bone-to-implant interface, or both."
      },
      {
        id: "sc-xray-pdl",
        labelAr: "2. التمييز الشعاعي بين فراغ الـ PDL والاندماج الصلب",
        badgeEn: "Radiograph: Tooth PDL Space vs Implant Direct Bone",
        duration: 8,
        focus: { cx: 0.5, cy: 0.55, scale: 1.2 },
        highlightTargetId: "t1",
        defaultParam: 85,
        xraySuggested: true,
        seeIq: "في أشعة X-Ray تشوف خطاً أسود رفيعاً (PDL space) محاطاً بـ Lamina dura بيضاء حول جذور الضرس الطبيعي لكن التيتانيوم ملتحم مباشرة بالعظم بدون أي خط أسود.",
        whyIq: "هذا الفرق الشعاعي الواضح يثبت ميكانيكياً إن الزرعة صلبة ولا تملك وسادة امتصاص الصدمات.",
        tipIq: "على مستوى العظم غياب الـ PDL حول الزرعة يفسر عجزها عن الامتصاص الميكانيكي لأي قوة إطباقية زائدة.",
        tipEn: "Radiographically natural molar shows radiolucent PDL space & lamina dura while adjacent implant fuses directly to alveolar bone."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const stress = st.paramVal / 100;
      h2.drawFlowTrack(ctx, [toPx(0.71, 0.14), toPx(0.71, 0.42)], t, stress > 0.5 ? "#FB7185" : "#2DD4BF", { width: 2.5, pulseCount: 2, showTip: true });
      if (stress > 0.45) {
        h2.drawShockRings(ctx, toPx(0.71, 0.42).x, toPx(0.71, 0.42).y, t, 30, "#FB7185");
      }
    }
  },

  "p9-t2": {
    topicId: "p9-t2",
    simId: "p9-proprioception-occlusion",
    imageUrl: "./src/assets/images/p9_t2_proprioception_occlusion_1795710245832.jpg",
    supportsXray: false,
    imageAlt: "Clinical occlusion photograph of upper and lower full-arch fixed implant prostheses with blue articulating paper marks",
    hudTitleAr: "الحس العميق من الـ PDL وانخفاض الحس اللمسي بالزرعات",
    hudBadgeEn: "PDL Proprioception · Reduced Tactile & Reflex · Both Jaws Challenge",
    interactiveParam: {
      labelAr: "مستوى الحساسية اللمسية ورد الفعل الوقائي:",
      minLabel: "فكين ثابتين (حس منخفض)",
      maxLabel: "أسنان طبيعية (PDL كامل)",
      defaultVal: 22,
      formatReadout: (v) => v >= 60
        ? { text: "حس عميق ومنعكس وقائي كامل من الـ PDL", tone: "ok" }
        : { text: "انخفاض Tactile Sensitivity & Reflex (تحذير إطباقي)", tone: "warn" }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.35, y: 0.48 },
      p1: { x: 0.65, y: 0.48 },
      handleLabel: "تفحص نقاط التماس الإطباقي"
    },
    targets: [
      {
        id: "t1",
        labelAr: "نقاط التماس الزرقاء",
        titleEn: "Articulating Paper Occlusal Contacts",
        descIq: "ضبط نقاط التماس بدقة حرج لأن المريض ما يحس بسهولة بعلو الإطباق مثل السن الطبيعي.",
        syncKeywords: ["tactile sensitivity", "reflex function"],
        posPct: { x: 32, y: 46 },
        color: "#38BDF8"
      },
      {
        id: "t2",
        labelAr: "التعويض الثابت بالفكين",
        titleEn: "Fixed Prostheses in Both Jaws",
        descIq: "الحالة تصير أكثر تحدياً وصعوبة عند وجود تعويضات زرع ثابتة بالفكين العلوي والسفلي معاً.",
        syncKeywords: ["both jaws", "more challenging"],
        posPct: { x: 54, y: 50 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "فقدان مستقبلات الـ PDL",
        titleEn: "Absent PDL Proprioception",
        descIq: "بما إن الـ Proprioception مصدره الـ PDL فغيابه يقلل قدرة الدماغ على كشف القوة الزائدة.",
        syncKeywords: ["Proprioception", "comes from the PDL"],
        posPct: { x: 68, y: 44 },
        color: "#FBBF24"
      }
    ],
    scenarios: [
      {
        id: "sc-proprio",
        labelAr: "1. مصدر الـ Proprioception وانخفاض الحس بالزرعة",
        badgeEn: "PDL Proprioception & Reduced Reflex",
        duration: 8,
        focus: { cx: 0.5, cy: 0.5, scale: 1 },
        highlightTargetId: "t3",
        defaultParam: 22,
        seeIq: "شوف الإطباق الكامل بالفكين مع علامات ورق العض الأزرق اللي يستخدمها الطبيب لفحص تماس التيجان.",
        whyIq: "الحس العميق (Proprioception) يجي من مستقبلات الـ PDL وبدونه يقل الـ tactile sensitivity والـ reflex function لدى مريض الزرعة.",
        tipIq: "احفظ الثلاثية: Proprioception مصدره الـ PDL + في الزرعات ينخفض الـ tactile sensitivity والـ reflex function.",
        tipEn: "Proprioception comes from the PDL; implants show reduced tactile sensitivity and reflex function."
      },
      {
        id: "sc-both-jaws",
        labelAr: "2. تحدي وجود تعويضات ثابتة بالفكين معاً",
        badgeEn: "Fixed Prostheses in Both Jaws",
        duration: 8,
        focus: { cx: 0.5, cy: 0.52, scale: 1.28 },
        highlightTargetId: "t2",
        defaultParam: 12,
        seeIq: "عندما يطبق فك علوي مزروع بالكامل على فك سفلي مزروع بالكامل تختفي وسادة الـ PDL من الطرفين تماماً.",
        whyIq: "وجود الأسنان الطبيعية بفك واحد يخفف الصدمة لكن وجود fixed prostheses في both jaws يجعل التحكم بالإطباق أكثر صعوبة.",
        tipIq: "تصير الحالة more challenging من تكون الـ fixed prostheses موجودة في الفكين ثنينهم (Both jaws).",
        tipEn: "Occlusal management becomes more challenging when fixed prostheses are present in both jaws."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      h2.drawFixedGuide(ctx, toPx(0.3, 0.51), toPx(0.7, 0.51), "Occlusal Plane", "#38BDF8", true);
      if (st.paramVal < 45) {
        h2.drawFocusAperture(ctx, { x: 0.5, y: 0.5 }, 0.3, 0.28);
      }
    }
  },

  "p10-t1": {
    topicId: "p10-t1",
    simId: "p10-growing-infraocclusion",
    imageUrl: "./src/assets/images/p10_t1_growing_infraocclusion_1795710268018.jpg",
    xrayImageUrl: "./src/assets/images/p10_t1_xray_1795710268234.jpg",
    supportsXray: true,
    imageAlt: "Anatomical cross-section of growing jaw showing submerged infraoccluded dental implant while adjacent natural teeth continue erupting upward",
    hudTitleAr: "منع الزرعة في طور النمو (Growing Individuals Contraindication)",
    hudBadgeEn: "Teeth Erupt & Migrate · Implant Fixed · Occlusal Disharmonies",
    interactiveParam: {
      labelAr: "مقدار نمو الفك وبزوغ الأسنان المجاورة (سنوات النمو):",
      minLabel: "سنة الزرع (مستوى واحد)",
      maxLabel: "بعد النمو (انغماس الزرعة)",
      defaultVal: 82,
      formatReadout: (v) => {
        const diff = ((v / 100) * 3.5).toFixed(1);
        return v >= 45
          ? { text: `بقاء الزرعة منخفضة (-${diff} mm Occlusal Disharmony)`, tone: "warn" }
          : { text: "بداية العمر قبل بزوغ الأسنان المجاورة", tone: "info" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.5, y: 0.28 },
      p1: { x: 0.5, y: 0.45 },
      handleLabel: "اسحب فرق مستوى الإطباق"
    },
    targets: [
      {
        id: "t1",
        labelAr: "الأسنان الطبيعية المستمرة بالبزوغ",
        titleEn: "Continuing Tooth Eruption & Migration",
        descIq: "الأسنان الطبيعية بفضل الـ PDL تستمر بالبزوغ والهجرة مع نمو الفك العظمي.",
        syncKeywords: ["continue to erupt", "migrate during growth"],
        posPct: { x: 64, y: 26 },
        color: "#2DD4BF"
      },
      {
        id: "t2",
        labelAr: "تاج الزرعة الغاطس",
        titleEn: "Stationary Submerged Implant",
        descIq: "الزرعة لا تتحرك أبداً فتبقى منخفضة بمستواها القديم وتسبب اختلالات إطباقية.",
        syncKeywords: ["occlusal disharmonies", "prior to the completion"],
        posPct: { x: 50, y: 31 },
        color: "#FB7185"
      },
      {
        id: "t3",
        labelAr: "غياب الـ PDL ومنع النمو",
        titleEn: "Contraindicated in Growing Individuals",
        descIq: "غياب الـ PDL وعدم القدرة على الحركة يمنع استخدام الزرعات للأفراد في طور النمو.",
        syncKeywords: ["growing individuals", "contraindicates"],
        posPct: { x: 50, y: 60 },
        color: "#FBBF24"
      }
    ],
    scenarios: [
      {
        id: "sc-growth-stop",
        labelAr: "1. استمرار بزوغ الأسنان وثبات الزرعة في القاع",
        badgeEn: "Natural Eruption vs Stationary Implant",
        duration: 8,
        focus: { cx: 0.5, cy: 0.45, scale: 1 },
        highlightTargetId: "t2",
        defaultParam: 82,
        seeIq: "شوف مستوى الأسنان الطبيعية اللي يم الزرعة صاعد لفوك بينما تاج الزرعة بالوسط باقي واطي بمكانه لأن العظم نما والزرعة ما لحكته.",
        whyIq: "بدون الـ PDL تتصرف الزرعة كوتد ثابت بالعظم؛ بينما الأسنان الطبيعية تبزغ وتهاجر مع نمو الفك فتصير مشكلة إطباقية.",
        tipIq: "غياب الـ PDL وعجز الزرعة عن الحركة يمنع زرعها عند growing individuals لأن وضعها قبل اكتمال النمو يسبب occlusal disharmonies.",
        tipEn: "Lack of PDL & inability to move contraindicates implants in growing individuals: natural teeth erupt & migrate whereas implants do not -> occlusal disharmonies."
      },
      {
        id: "sc-xray-infra",
        labelAr: "2. الدليل الشعاعي للانغماس تحت مستوى الإطباق",
        badgeEn: "Radiograph: Submerged Implant Infraocclusion",
        duration: 8,
        focus: { cx: 0.5, cy: 0.44, scale: 1.25 },
        highlightTargetId: "t1",
        defaultParam: 90,
        xraySuggested: true,
        seeIq: "في أشعة X-Ray يبين تاج الزرعة غاطساً واضحاً بين التاجين المجاورين وفراغ العظم العلوي يتدرج تحت الأسنان البازغة.",
        whyIq: "لذلك ينتظر طبيب الأسنان اكتمال النمو الهيكلي والفكي بالكامل قبل وضع أي زرعة سنية.",
        tipIq: "تذكر: الأسنان الطبيعية تستمر بالـ Eruption و Migration أثناء النمو بينما الزرعة تبقى ساكنة.",
        tipEn: "Radiograph confirms adjacent natural teeth with intact PDL erupted higher while the ankylosed implant remained submerged."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      h2.drawFixedGuide(ctx, toPx(0.28, 0.2), toPx(0.74, 0.2), "Natural Occlusal Plane", "#2DD4BF", true);
      const drop = 0.22 + (st.paramVal / 100) * 0.08;
      h2.drawFixedGuide(ctx, toPx(0.42, drop), toPx(0.58, drop), "Implant Level", "#FB7185", false);
      h2.drawFlowTrack(ctx, [toPx(0.64, 0.45), toPx(0.64, 0.22)], t, "#2DD4BF", { width: 1.8, pulseCount: 2, showTip: true });
    }
  },

  "p10-t2": {
    topicId: "p10-t2",
    simId: "p10-integrated-summary",
    imageUrl: "./src/assets/images/p10_t2_integrated_summary_1795710307580.jpg",
    supportsXray: false,
    imageAlt: "Comprehensive comparison of natural tooth periodontium vs peri-implant mucosa showing biologic width, collagen fibers, and blood vessels (Fig. 4)",
    hudTitleAr: "الخلاصة المتكاملة للشكل 4: الكولاجين والتروية والختم (Slides 29–30)",
    hudBadgeEn: "Fig. 4 Synthesis · Perpendicular vs Parallel · PDL vs CT Blood",
    interactiveParam: {
      labelAr: "مؤشر المقارنة النسيجية (السن الطبيعي ↔ الزرعة السنية):",
      minLabel: "تركيز على السن (PDL)",
      maxLabel: "تركيز على الزرعة (PIE)",
      defaultVal: 50,
      formatReadout: (v) => {
        if (v < 40) return { text: "السن: 2mm + ألياف عمودية + دم PDL غزير", tone: "ok" };
        if (v > 60) return { text: "الزرعة: 3–4mm + ألياف موازية + دم أقل", tone: "warn" };
        return { text: "مقارنة شاملة (Fig. 4a & 4b)", tone: "info" };
      }
    },
    dragGizmo: {
      kind: "line",
      p0: { x: 0.24, y: 0.52 },
      p1: { x: 0.76, y: 0.52 },
      handleLabel: "حرّك للمقارنة بين السن والزرعة"
    },
    targets: [
      {
        id: "t1",
        labelAr: "العرض البيولوجي للسن vs الزرعة",
        titleEn: "Biologic Width: 2 mm vs 3–4 mm",
        descIq: "السن يمتلك عرضاً بيولوجياً أقصر (JE 0.5–1 mm + CT) بينما الزرعة 3–4 mm (2 mm PIE + CT).",
        syncKeywords: ["Fig. 4", "Locus"],
        posPct: { x: 56, y: 34 },
        color: "#FBBF24"
      },
      {
        id: "t2",
        labelAr: "اتجاه الكولاجين (Fig. 4a)",
        titleEn: "Collagen Fibers: Perpendicular vs Parallel",
        descIq: "عمودية في الملاط حول السن الطبيعي وممتدة من العظم بشكل موازٍ حول الزرعة.",
        syncKeywords: ["perpendicular to the cementum", "parallel to the implant"],
        posPct: { x: 65, y: 41 },
        color: "#38BDF8"
      },
      {
        id: "t3",
        labelAr: "الأوعية الدموية (Fig. 4b)",
        titleEn: "Blood Supply: PDL+Bone vs Reduced",
        descIq: "السن يتغذى من خارج العظم ومن الـ PDL معاً بينما الزرعة ترويتها أقل لغياب الـ PDL.",
        syncKeywords: ["outside the alveolar bone", "reduced blood supply"],
        posPct: { x: 20, y: 74 },
        color: "#2DD4BF"
      },
      {
        id: "t4",
        labelAr: "التروية الأقل بالزرعة",
        titleEn: "No PDL Vascular Source",
        descIq: "غياب الرباط السنخي السني يقلص التروية الدموية للثة حول الزرعة ويؤثر على الدفاع والشفاء.",
        syncKeywords: ["periodontal ligament source is not present", "Thank you"],
        posPct: { x: 66, y: 74 },
        color: "#FB7185"
      }
    ],
    scenarios: [
      {
        id: "sc-fig4a",
        labelAr: "1. ملخص Fig. 4a: ألياف الكولاجين والطول الظهاري",
        badgeEn: "Fig. 4a: Collagen Orientation & Seal Height",
        duration: 8,
        focus: { cx: 0.5, cy: 0.36, scale: 1.1 },
        highlightTargetId: "t2",
        defaultParam: 65,
        seeIq: "شوف بالجزء العلوي للوحة مقارنة الطول (1–2 ملم مقابل 3–4 ملم) مع ألياف عمودية باليسار وألياف طالعة بموازاة الزرعة باليمين.",
        whyIq: "عدم وجود الملاط والـ PDL يجبر ألياف الكولاجين على السير بموازاة الزرعة بدلاً من الانغراس فيها.",
        tipIq: "Fig. 4a: ألياف الكولاجين بالسن عمودية على الملاط وبالزرعة تمتد من العظم وتمشي موازية لسطح الزرعة.",
        tipEn: "Fig. 4a: Natural tooth has collagen fibers perpendicular to cementum; implants have fibers extending from bone running parallel to implant surface."
      },
      {
        id: "sc-fig4b",
        labelAr: "2. ملخص Fig. 4b: التروية الدموية وختام المنهج",
        badgeEn: "Fig. 4b: Vascular Supply & Syllabus Wrap-Up",
        duration: 8,
        focus: { cx: 0.5, cy: 0.68, scale: 1.1 },
        highlightTargetId: "t3",
        defaultParam: 35,
        seeIq: "شوف بالجزء السفلي للوحة شلون الأوعية الحمراء والزرقاء تغمر السن من الـ PDL ومن برة العظم بينما حول الزرعة مجرد فرع محدود من خارج العظم.",
        whyIq: "فهم هاي الفروقات النسيجية والتروية يخليك تحترم اللثة حول الزرعة بالنظافة الفموية والسبر اللطيف وضبط الإطباق.",
        tipIq: "Fig. 4b: التروية حول السن من خارج العظم ومن الـ PDL بينما بالزرعة reduced blood supply لأن مصدر الـ PDL مفقود.",
        tipEn: "Fig. 4b: Normal periodontal soft tissue supplied from outside alveolar bone & PDL; peri-implant tissue has reduced blood supply (no PDL source)."
      }
    ],
    drawOverlay(ctx, _w, _h, t, st, toPx, h2) {
      const cx = st.paramVal < 40 ? 0.27 : st.paramVal > 60 ? 0.72 : 0.5;
      h2.drawFocusAperture(ctx, { x: cx, y: 0.5 }, 0.3, 0.25);
      h2.drawFlowTrack(ctx, [toPx(0.18, 0.8), toPx(0.24, 0.48)], t, "#2DD4BF", { width: 2, pulseCount: 2 });
      h2.drawFlowTrack(ctx, [toPx(0.62, 0.78), toPx(0.68, 0.62)], t, "#FB7185", { width: 1.6, pulseCount: 1, dashed: true });
    }
  }
};

export {
  TOPIC_STUDIOS
};
