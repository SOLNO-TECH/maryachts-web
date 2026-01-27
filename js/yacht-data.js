const yates = [
    {
        nombre: "92' President",
        nombre_en: "92' President",
        imagenes: ["92 President/1.png", "92 President/2.png", "92 President/3.jpg", "92 President/4.jpg", "92 President/5.jpg", "92 President/6.jpg", "92 President/7.jpg", "92 President/8.jpg", "92 President/10.png"],
        precioInicio: "5,700 USD",
        ubicacion: "Marina La Cruz",
        capacidad: {
            estandar: 15,
            maxima: 30,
            personaExtra: "70 USD each"
        },
        cabinas: "3 staterooms (camarotes) cómodos para dormir",
        banos: "4 baños",
        amenidades: [
            "Amplio salón interior",
            "Patio exterior para comer al aire libre",
            "Flybridge expandido con asientos y bar mojado",
            "Skybridge con sillas lounge para observar el paisaje o el atardecer",
            "Cocina",
            "Jacuzzi para 6 personas",
            "Sistema de sonido de alta calidad",
            "Televisores de pantalla grande",
            "Sistema de karaoke para entertainment a bordo",
            "A/C",
            "Starlink Wifi",
            "BBQ Grill"
        ],
        waterToys: "Snorkel, kayak, paddleboards, jetski, tobogán acuático",
        descripcion: "92' President es un yate de lujo de 92 pies ideal para quienes buscan comodidad, entretenimiento y aventura en alta mar. Con amplios espacios interiores y exteriores, lujos como jacuzzi y sistema de sonido premium, además de actividades acuáticas incluidas, ofrece una experiencia náutica premium personalizada en la Bahía de Banderas.",
        inclusiones: "Hielo, agua, refrescos, fruta fresca, ceviche, 1 botella de tequila, cervezas. (Comida Surf n' Turf disponible con costo adicional).",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "85' Azimut",
        nombre_en: "85' Azimut",
        imagenes: ["85 Azimut/85 Azimut HT 1.jpg", "85 Azimut/85 Azimut HT 2.jpg", "85 Azimut/85 Azimut HT 3.jpg", "85 Azimut/85 Azimut HT 10.jpg", "85 Azimut/85 Aimut HT 5.jpg", "85 Azimut/85 Azimut HT 6.jpg", "85 Azimut/85 Azimut HT 7.jpg", "85 Azimut/85 Azimut HT 8.jpg", "85 Azimut/85 Azimut HT 9.jpg", "85 Azimut/85 Azimut HT 4.jpg"],
        precioInicio: "7,600 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 15,
            maxima: 25,
            personaExtra: "70 USD each"
        },
        cabinas: "4 staterooms (camarotes) cómodos para dormir",
        banos: "5 baños",
        amenidades: [
            "El yate cuenta con un salón interior espacioso y elegante, con sistemas de entretenimiento, bar totalmente equipado y asientos confortables para socializar o relajarse dentro de la embarcación",
            "Amplio flybridge transformado en zona de socialización: ideal para tomar el sol, cenar al aire libre o disfrutar de un cóctel con vistas panorámicas",
            "Cubierta de proa con cojines y asientos, perfecta para descanso y vistas",
            "Bimini opcional para sombra",
            "Cocina completa",
            "Jacuzzi",
            "A/C",
            "Bluetooth sound system",
            "Internet"
        ],
        waterToys: "Snorkel, lilypad, paddleboards, cañas de pesca, tobogán acuático, dinghy",
        descripcion: "El 85′ Azimut es un yate de lujo italiano con espacios amplios, diseño refinado y múltiples áreas de entretenimiento, ideal para charters de alto nivel en la región de Puerto Vallarta y destinos cercanos. Con capacidad generosa, comodidades modernas y opciones de actividades acuáticas, ofrece una experiencia náutica premium y versátil tanto para paseos diurnos como para eventos especiales en el mar.",
        inclusiones: "Hielo, agua, refrescos, cervezas, margaritas de bienvenida, fruta fresca, guacamole, ceviche y sashimi de atún. (6 hrs y 8 hrs + hamburguesas a la parrilla).",
        noIncluido: "Propina de la tripulación. Cargos adicionales si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "81' Sailboat",
        nombre_en: "81' Sailboat",
        imagenes: ["81 Sailboat/81 Sailboat.jpg", "81 Sailboat/81 Sailboat 3.jpg", "81 Sailboat/81 Sailboat 4.jpg", "81 Sailboat/81 Sailboat 7.jpg", "81 Sailboat/81 Sailboat 6.jpg", "81 Sailboat/81 Sailboat 5.jpg", "81 Sailboat/81 Sailboat 8.jpg"],
        precioInicio: "2,050 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 15,
            maxima: 30,
            personaExtra: "50 USD each"
        },
        cabinas: "3 staterooms (camarotes) cómodos para dormir",
        banos: "2.5 baños",
        amenidades: [
            "Amplias áreas exteriores para relajarse, tomar el sol o disfrutar del paisaje oceánico",
            "Posibilidad de zonas sombreadas bajo la vela o bimini para confort en días soleados",
            "Cocina",
            "Jacuzzi",
            "Sistema de sonido bluetooth",
            "A/C",
            "Starlink Wifi"
        ],
        waterToys: "Paddleboards, lilypad, cañas de pesca",
        descripcion: "Navegar en el 81' Sailboat ofrece una experiencia serena y panorámica de las costas de Puerto Vallarta, con vistas espectaculares de la Sierra Madre, playas doradas y el Pacífico — ideal para relajarse o tomar fotografías memorables.",
        inclusiones: "Agua, hielo, refrescos, jugo, fruta fresca, guacamole, ceviche.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "60' Mikelson",
        nombre_en: "60' Mikelson",
        imagenes: ["60 Mikelson/60 Mikelson.jpg", "60 Mikelson/60 Mikelson 2.jpg", "60 Mikelson/60 Mikelson 3.jpg", "60 Mikelson/60 Mikelson 4.jpg", "60 Mikelson/60 Mikelson 5.jpg", "60 Mikelson/60 Mikelson 6.jpg", "60 Mikelson/60 Mikelson 7.jpg", "60 Mikelson/60 Mikelson 8.jpg", "60 Mikelson/60 Mikelson 9.jpg", "60 Mikelson/60 Mikelson 10.jpg"],
        precioInicio: "1,800 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 10,
            maxima: 18,
            personaExtra: "35 USD each"
        },
        cabinas: "3 staterooms (camarotes)",
        banos: "1 baño",
        amenidades: [
            "Flybridge con área de mando y asientos elevados",
            "Salón interior y cabina con aire acondicionado",
            "Cocina equipada (nevera, horno, cocina, utensilios)",
            "Sistema de audio / altavoces exteriores y pantalla plana",
            "Plataforma de baño para acceso al agua",
            "Wifi, bimini y equipos de navegación estándar"
        ],
        waterToys: "Equipo de snorkel, tablas de paddle, lilypad. (Equipo de pesca para charters de pesca).",
        descripcion: "El 60′ Mikelson es un yate deportivo de motor con flybridge de 60 pies. Es versátil para paseos de lujo, pesca deportiva en alta mar y avistamiento de ballenas, con espacios tanto interiores como exteriores cómodos y equipados para disfrutar el mar.",
        inclusiones: "Hielo, agua, refrescos, cervezas. Tostadas para ceviche \"pesca del día\" para charters de pesca.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "59' Azimut",
        nombre_en: "59' Azimut",
        imagenes: ["59 Azimut/59_ Azimut 1.jpeg", "59 Azimut/59_ Azimut 2.jpeg", "59 Azimut/59_ Azimut 5.jpeg", "59 Azimut/59_ Azimut 4.jpeg", "59 Azimut/59_ Azimut 6.jpeg", "59 Azimut/59_ Azimut 7.jpeg"],
        precioInicio: "3,100 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 15,
            maxima: 25,
            personaExtra: "75 USD each"
        },
        cabinas: "3 staterooms (camarotes)",
        banos: "2 baños",
        amenidades: [
            "Sala interior",
            "Cocina",
            "Comedor",
            "Proa amplia acolchada",
            "Sistema de sonido bluetooth"
        ],
        waterToys: "Snorkel gear, 2 Cañas de pesca, 2 Paddle boards, 1 Lilypad",
        descripcion: "El Azimut 59’ es la combinación perfecta entre elegancia italiana, confort absoluto y rendimiento en el mar. Diseñado para quienes buscan una experiencia náutica de alto nivel, este yate ofrece espacios amplios, acabados de lujo y una navegación suave y segura. Cuenta con flybridge panorámico, ideal para relajarse, tomar el sol o disfrutar de momentos inolvidables con vistas espectaculares. Sus áreas exteriores e interiores están pensadas para el entretenimiento y la comodidad, con una distribución inteligente que maximiza cada espacio. En el interior, el yate dispone de cabinas privadas finamente equipadas, una sala luminosa con diseño moderno y una cocina totalmente funcional, creando un ambiente sofisticado y acogedor. Su potencia y estabilidad garantizan una travesía placentera, perfecta tanto para recorridos costeros como para escapadas exclusivas. Ideal para charters privados, celebraciones especiales o días de lujo en el mar, el Azimut 59’ transforma cada travesía en una experiencia inolvidable.",
        inclusiones: "Agua y hielo",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "60' Sea Ray Express",
        nombre_en: "60' Sea Ray Express",
        imagenes: ["60 Sea Ray Express/60_ Sea Ray 1.jpeg", "60 Sea Ray Express/60_ Sea Ray 2 (2).jpeg", "60 Sea Ray Express/60_ Sea Ray 3.jpeg", "60 Sea Ray Express/60_ Sea Ray 4.jpeg", "60 Sea Ray Express/60_ Sea Ray 5.jpeg", "60 Sea Ray Express/60_ Sea Ray 6.jpeg", "60 Sea Ray Express/60_ Sea Ray 7.jpeg", "60 Sea Ray Express/60_ Sea Ray 8.jpeg"],
        precioInicio: "1,550 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 12,
            maxima: 25,
            personaExtra: "35 USD each"
        },
        cabinas: "2 staterooms (camarotes)",
        banos: "2 baños",
        amenidades: [
            "Salón interior y cabina con aire acondicionado",
            "Sala exterior",
            "Proa acojinada",
            "Cocina equipada",
            "Sistema de sonido bluetooth"
        ],
        waterToys: "Snorkel gear, paddle boards, lilypad",
        descripcion: "El Sea Ray Express 600 es un yate a motor tipo express cruiser diseñado para ofrecer comodidad, estilo y rendimiento en paseos costeros, chárter recreativo o cruceros de día completo. Es ideal para eventos privados, salidas al atardecer, paseos familiares o con amigos, gracias a su combinación de espacios interiores acogedores, zonas sociales exteriores y buen desempeño en el agua.",
        inclusiones: "Hielo, agua, refrescos, cervezas.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "55' Sea Ray L550",
        nombre_en: "55' Sea Ray L550",
        imagenes: ["55 Sea Ray L550/55_ Sea Ray.jpeg", "55 Sea Ray L550/55_ Sea Ray 2.jpeg", "55 Sea Ray L550/55_ Sea Ray 10.jpeg", "55 Sea Ray L550/55_ Sea Ray 4.jpeg", "55 Sea Ray L550/55_ Sea Ray 5.jpeg", "55 Sea Ray L550/55_ Sea Ray 6.jpeg", "55 Sea Ray L550/55_ Sea Ray 3.jpeg", "55 Sea Ray L550/55_ Sea Ray 8.jpeg", "55 Sea Ray L550/55_ Sea Ray 9.jpeg", "55 Sea Ray L550/55_ Sea Ray 7.jpeg"],
        precioInicio: "4,100 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 12,
            maxima: 12
        },
        cabinas: "3 staterooms (camarotes) cómodos para dormir",
        banos: "3 baños",
        amenidades: [
            "Sala interior con aire acondicionado",
            "Sala exterior",
            "Cocina equipada",
            "Sistema de sonido Bose",
            "Starlink Wifi"
        ],
        waterToys: "Equipo de snorkel, paddle board, lilypad",
        descripcion: "El Sea Ray L550 es un yate de lujo que destaca por su diseño moderno, alto rendimiento y confort excepcional. Con líneas elegantes y una presencia imponente, ofrece una experiencia náutica sofisticada pensada para quienes buscan exclusividad y estilo en cada travesía. Sus amplias zonas exteriores incluyen espacios de solárium, áreas de descanso y una distribución perfecta para el entretenimiento a bordo, permitiendo disfrutar del mar con total comodidad tanto en navegación como fondeado. El flybridge y la bañera proporcionan vistas privilegiadas y un ambiente ideal para socializar. En el interior, sorprende con un diseño contemporáneo, materiales de alta gama y una cuidada iluminación natural. Sus camarotes espaciosos, baños elegantes y salón panorámico crean un entorno refinado y acogedor, perfecto para estancias prolongas. Gracias a su potente motorización, estabilidad y tecnología avanzada, el Sea Ray L550 garantiza una navegación suave, segura y placentera, convirtiéndose en la elección ideal para quienes desean vivir el mar con lujo, confort y experiencias inolvidables.",
        inclusiones: "Hielo, agua, refrescos, cervezas, fruta fresca, papas, guacamole, ceviche, entremeses.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "52' Azimut",
        nombre_en: "52' Azimut",
        imagenes: ["52 Azimut/52 Azimut 1.jpg", "52 Azimut/52 Azimut 2.jpg", "52 Azimut/52 Azimut 7.jpg", "52 Azimut/52 Azimut 4.jpg", "52 Azimut/52 Azimut 5.jpg", "52 Azimut/52 Azimut 6.jpg", "52 Azimut/52 Azimut 3.jpg", "52 Azimut/52 Azimut 8.jpg"],
        precioInicio: "1,900 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 10,
            maxima: 15,
            personaExtra: "50 USD each"
        },
        cabinas: "2 staterooms (camarotes)",
        banos: "2 baños",
        amenidades: [
            "Salón interior y cabina con aire acondicionado",
            "Sala exterior",
            "Deck exterior con asoleadero y áreas para sentarse o relajarse al sol",
            "Flybridge amplio con zona de mando y asientos para disfrutar del paisaje y socializar en alta mar",
            "Cocina equipada",
            "Plataforma de baño y acceso al agua para natación o snorkel",
            "Sistema de audio bluetooth",
            "Wifi"
        ],
        waterToys: "Snorkel gear, lilypad, kayak",
        descripcion: "El 52′ Azimut es un yate a motor de lujo de tipo flybridge que combina el estilo italiano, el confort y un rendimiento marino ágil para ofrecer experiencias náuticas sofisticadas y memorables. Es un yate elegante, bien equipado y versátil, ideal para quienes buscan navegar con estilo y confort, ya sea en excursiones diurnas, salidas al atardecer o viajes más largos con familia y amigos.",
        inclusiones: "Hielo, agua, refrescos, cervezas.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "50' Marquis",
        nombre_en: "50' Marquis",
        imagenes: ["50 Marquis/50 Marquis.jpg", "50 Marquis/50 Marquis 5.jpeg", "50 Marquis/50 Marquis 3.jpg", "50 Marquis/50 Marquis 4.jpeg", "50 Marquis/50 Marquis 2.jpg", "50 Marquis/50 Marquis 6.jpeg", "50 Marquis/50 Marquis 7.jpeg", "50 Marquis/50 Marquis 8.jpg", "50 Marquis/50 Marquis 9.jpg", "50 Marquis/50 Marquis 10.jpg"],
        precioInicio: "3,000 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 8,
            maxima: 12,
            personaExtra: "70 USD each"
        },
        cabinas: "3 staterooms (camarotes)",
        banos: "2 baños",
        amenidades: [
            "Cómodo salón interior donde relajarse con asientos confortables con aire acondicionado",
            "Proa acolchada ideal para tomar el sol o recostarse con vistas al mar",
            "Comedor exterior perfecto para disfrutar alimentos y bebidas frescas mientras navegas",
            "Plataforma de baño para acceso al agua",
            "Cocina equipada",
            "La combinación de diseño deportivo con acabados cuidados y funcionales hace de este yate una opción elegante y práctica para vivir momentos inolvidables en alta mar"
        ],
        waterToys: "Snorkel gear, lilypad",
        descripcion: "El Marquis 50 es un yate lujoso que combina estilo deportivo moderno, comodidad premium y un rendimiento suave en el agua. Este barco está diseñado para elevar cualquier salida al mar, perfecto para quienes buscan experiencias náuticas exclusivas en la Bahía de Banderas desde paseos al atardecer con pareja hasta celebraciones con amigos o aventuras familiares por la costa.",
        inclusiones: "Hielo, agua, refrescos, ceviche y guacamole. (Opción de menú disponible por 60 USD por persona).",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente.",
        masRentado: true
    },
    {
        nombre: "47' Fountaine Pajot",
        nombre_en: "47' Fountaine Pajot",
        imagenes: [
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE11.JPG",
            "47 Fountaine Pajot/CATAMARÁNEXT_INT_27.jpg",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE13.JPG",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE14.JPG",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE15.JPG",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE16.JPG",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE18.JPG",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE110.JPG",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE11 (1).JPG",
            "47 Fountaine Pajot/CATAMARÁNEXT_INT_10.jpg",
            "47 Fountaine Pajot/CATAMARÁNEXT_INT_19.jpg",
            "47 Fountaine Pajot/CATAMARÁNEXT_INT_20.jpg",
            "47 Fountaine Pajot/CATAMARÁNEXT_INT_24.jpg",
            "47 Fountaine Pajot/RAYANDOELSOLDRONLOTE12.JPG",
            "47 Fountaine Pajot/CATAMARÁNEXT_INT_56.jpg",
            "47 Fountaine Pajot/RAYANDOELSOLVELANOCHE_6.jpg",
            "47 Fountaine Pajot/RES_LIFESTYLE_34.jpg",
            "47 Fountaine Pajot/RES_LIFESTYLE_81.jpg",
            "47 Fountaine Pajot/RESCOMIDA1.jpg",
            "47 Fountaine Pajot/RESCOMIDA12.jpg"
        ],
        precioInicio: "3,800 USD",
        ubicacion: "Marina La Cruz",
        capacidad: {
            estandar: 12,
            maxima: 16,
            personaExtra: "150 USD each"
        },
        cabinas: "5 staterooms (camarotes) cómodos para dormir",
        banos: "5 baños",
        amenidades: [
            "Salón con cocina en \"U\" (galley) integrada, que crea un ambiente abierto y sociable",
            "Gran área de comedor y descanso, con ventanales que proporcionan luz natural y vistas al mar",
            "Estación de navegación accesible desde el salón/cockpit, que facilita maniobrar con seguridad y comodidad",
            "Cockpit protegido y áreas de descanso exterior ideales para comer o relajarse al aire libre",
            "Flybridge o \"Lounge Deck\" amplio, más grande que en modelos anteriores, con zonas de asientos y solárium que son perfectos para charlas, tomar el sol o ver el atardecer",
            "Espacio delantero con trampolines que facilitan el descanso sobre el agua y la exploración de zonas poco profundas",
            "Aire acondicionado",
            "Bluetooth sound system",
            "Starlink Wifi"
        ],
        waterToys: "Snorkel gear, paddle boards, lilypad, fishing rods, dinghy",
        descripcion: "El 47 Foutaine Pajot es un catamarán de vela moderno, elegante y versátil diseñado para cruceros confortables, largos recorridos o chárter con familia y amigos. Este multicasco combina espacio, luminosidad, ergonomía y rendimiento náutico en un diseño que lo hace ideal tanto para navegación costera como para travesías oceánicas. Proporciona gran estabilidad y volumen interior y exterior. Su casco y cubierta están diseñados para facilitar la navegación y maximizar el espacio útil a bordo, y su estética moderna destaca por líneas elegantes y ventanales panorámicos que llenan de luz los espacios interiores.",
        inclusiones: "Barra libre premium, menú de 4 tiempos - chef a bordo.",
        noIncluido: "Propina de la tripulación."
    },
    {
        nombre: "46' Sunseeker",
        nombre_en: "46' Sunseeker",
        imagenes: ["46 Sunseeker/46_ Sunseeker 1.jpeg", "46 Sunseeker/46_ Sunseeker 2.jpeg", "46 Sunseeker/46_ Sunseeker 3.jpeg", "46 Sunseeker/46_ Sunseeker 4.jpeg", "46 Sunseeker/46_ Sunseeker 5.jpeg", "46 Sunseeker/46_ Sunseeker 6.jpeg", "46 Sunseeker/46_ Sunseeker 7.jpeg", "46 Sunseeker/46_ Sunseeker 8.jpeg", "46 Sunseeker/46_ Sunseeker 9.jpeg"],
        precioInicio: "1,300 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 10,
            maxima: 15,
            personaExtra: "35 USD each"
        },
        cabinas: "2 staterooms (camarotes) cómodos para dormir",
        banos: "2 baños",
        amenidades: [
            "Sala interior",
            "Sala exterior",
            "Cocina",
            "Jacuzzi",
            "Sistema de sonido bluetooth",
            "A/C",
            "Wifi"
        ],
        waterToys: "Equipo de snorkel, paddle board, lilypad",
        descripcion: "El Sunseeker 46' representa la combinación perfecta entre lujo, deportividad y confort, fiel al inconfundible ADN británico de Sunseeker. Con líneas exteriores sofisticadas y un diseño interior cuidadosamente optimizado, esta embarcación ofrece una experiencia de navegación exclusiva tanto para escapadas de día como para estancias prolongadas. Su amplio flybridge y zonas de solárium invitan a disfrutar del mar con total privacidad, mientras que la bañera y el salón proporcionan espacios ideales para el relax y la vida social a bordo. En el interior, acabados de alta calidad, iluminación natural y una distribución inteligente crean un ambiente elegante y acogedor. Un yate diseñado para quienes buscan estilo, exclusividad y sensaciones únicas en el mar.",
        inclusiones: "Hielo, agua.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "42' Lagoon Catamaran",
        nombre_en: "42' Lagoon Catamaran",
        imagenes: ["42 Lagoon/42 Lagoon 1.jpg", "42 Lagoon/42 Lagoon 2.jpg", "42 Lagoon/42 Lagoon 3.jpg", "42 Lagoon/42 Lagoon 4.jpg", "42 Lagoon/42 Lagoon 5.jpg", "42 Lagoon/42 Lagoon 6.jpg", "42 Lagoon/42 Lagoon 7.jpg"],
        precioInicio: "2,250 USD",
        ubicacion: "Marina La Cruz",
        capacidad: {
            estandar: 10,
            maxima: 20,
            personaExtra: "50 USD each"
        },
        cabinas: "3 staterooms (camarotes) cómodos para dormir",
        banos: "3 baños",
        amenidades: [
            "Sala interior",
            "Sala exterior",
            "Cocina equipada",
            "Sistema de sonido bluetooth"
        ],
        waterToys: "Equipo de snorkel, paddle board, lilypad, caña de pesca",
        descripcion: "El Lagoon 42 es un catamarán que combina a la perfección espacio, estabilidad y confort, ofreciendo una experiencia de navegación relajada y sofisticada. Diseñado para disfrutar del mar con total comodidad, destaca por su amplitud, luminosidad y excelente distribución tanto en interior como en exterior. Su cockpit a nivel del salón, perfectamente integrado, crea un espacio social amplio y fluido, ideal para compartir momentos inolvidables fondeados o en navegación. Las zonas de solárium, junto con el puesto de mando elevado, permiten disfrutar del entorno con una vista privilegiada y una navegación segura. Gracias a su diseño equilibrado y a la reconocida ingeniería de Lagoon, el Lagoon 42 garantiza una navegación estable, eficiente y placentera, convirtiéndose en la elección ideal para quienes buscan libertad, confort y elegancia en el mar.",
        inclusiones: "Margarita de bienvenida, fruta fresca, guacamole, agua, hielo, refrescos. (Fajitas disponibles con costo adicional).",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    },
    {
        nombre: "40' Lagoon Catamaran",
        nombre_en: "40' Lagoon Catamaran",
        imagenes: ["40 Lagoon/40 Lagoon.jpg", "40 Lagoon/40 Lagoon 2.jpg", "40 Lagoon/40 Lagoon 3.jpg", "40 Lagoon/40 Lagoon 4.jpg", "40 Lagoon/40 Lagoon 5.jpg", "40 Lagoon/40 Lagoon 6.jpg", "40 Lagoon/40 Lagoon 7.jpg"],
        precioInicio: "1,900 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 10,
            maxima: 18,
            personaExtra: "50 USD each"
        },
        cabinas: "4 staterooms (camarotes) cómodos para dormir",
        banos: "4 baños",
        amenidades: [
            "Sala interior",
            "Sala exterior",
            "Cocina equipada",
            "Sistema de sonido bluetooth"
        ],
        waterToys: "Equipo de snorkel, paddle board, lilypad, caña de pesca",
        descripcion: "El Lagoon 40 es un catamarán moderno y versátil, diseñado para ofrecer una experiencia de navegación cómoda, estable y llena de estilo. Su diseño inteligente maximiza el espacio y la funcionalidad, convirtiéndose en una opción perfecta tanto para escapadas de día como para estancias más largas a bordo. El amplio cockpit a nivel del salón crea una conexión fluida entre interior y exterior, ideal para disfrutar del mar en un ambiente relajado y social. Las zonas de descanso, junto con su puesto de mando bien integrado, permiten navegar con seguridad sin renunciar al confort. En el interior, destaca por su luminosidad, acabados contemporáneos y una distribución pensada para el bienestar de los invitados. Gracias a la reconocida calidad de Lagoon, el Lagoon 40 garantiza una navegación suave y estable, convirtiéndose en la elección ideal para quienes buscan libertad, comodidad y momentos inolvidables en el mar.",
        inclusiones: "Margarita de bienvenida, fruta fresca, guacamole, agua, hielo, refrescos. (Fajitas disponibles con costo adicional).",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente.",
        masRentado: true
    },
    {
        nombre: "40' Ocean",
        nombre_en: "40' Ocean",
        imagenes: ["40 Ocean/40 Ocean.jpg", "40 Ocean/40 Ocean 2.jpg", "40 Ocean/40 Ocean 3.jpg", "40 Ocean/40 Ocean 4.jpg", "40 Ocean/40 Ocean 5.jpg"],
        precioInicio: "1,400 USD",
        ubicacion: "Marina Puerto Vallarta",
        capacidad: {
            estandar: 8,
            maxima: 12,
            personaExtra: "45 USD each"
        },
        cabinas: "1 staterooms (camarotes)",
        banos: "1 baños",
        amenidades: [
            "Sala interior con aire acondicionado",
            "Cocina equipada",
            "Sistema de sonido bluetooth"
        ],
        waterToys: "Equipo de snorkel, cañas de pesca",
        descripcion: "El 40' Ocean es una embarcación de pesca deportiva diseñada para ofrecer rendimiento, seguridad y confort en cada jornada en el mar. Robusta, potente y perfectamente equipada, es la elección ideal tanto para pescadores experimentados como para quienes desean vivir una auténtica experiencia de pesca de altura. Su amplia bañera de pesca proporciona el espacio necesario para trabajar cómodamente durante la acción, mientras que su estabilidad y excelente comportamiento en navegación garantizan salidas seguras incluso en condiciones exigentes. 40' Ocean está preparada para la pesca de especies pelágicas, combinando potencia y maniobrabilidad para alcanzar los mejores puntos de pesca con rapidez. En el interior, ofrece un ambiente funcional y confortable para el descanso entre jornadas, con camarote, baño y zona resguardada, aportando comodidad durante salidas prolongadas. Todo ello convierte al 40' Ocean en una plataforma de pesca fiable, eficiente y lista para la acción. Una embarcación pensada para quienes persiguen grandes capturas y experiencias inolvidables en el mar.",
        inclusiones: "Hielo, agua, seis cervezas, seis refrescos. Tostadas para ceviche \"pesca del día\" para charters de pesca.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente.",
        masRentado: true
    },
    {
        nombre: "27' Sea Ray",
        nombre_en: "27' Sea Ray",
        imagenes: ["27 Sea Ray/27_ Sea Ray 1.jpeg", "27 Sea Ray/27_ Sea Ray 2.jpeg", "27 Sea Ray/27_ Sea Ray 3.jpeg", "27 Sea Ray/27_ Sea Ray 4.jpeg", "27 Sea Ray/27_ Sea Ray 5.jpeg", "27 Sea Ray/27_ Sea Ray 6.jpeg", "27 Sea Ray/27_ Sea Ray 7.jpeg", "27 Sea Ray/27_ Sea Ray 8.jpeg"],
        precioInicio: "1,100 USD",
        ubicacion: "Marina La Cruz",
        capacidad: {
            estandar: 8,
            maxima: 8
        },
        cabinas: "0 staterooms",
        banos: "1 baños",
        amenidades: [
            "Sala exterior",
            "Baño",
            "Sistema de sonido bluetooth"
        ],
        descripcion: "El Sea Ray 27 es una embarcación versátil y elegante, perfecta para quienes buscan comodidad, diversión y rendimiento en el mar. Con un diseño compacto y moderno, combina maniobrabilidad con espacios bien distribuidos, ofreciendo una experiencia náutica ágil y placentera.\n\nSu cockpit abierto permite disfrutar del sol y del entorno mientras se navega o se fondea, ideal para salidas de día. La zona de mando está diseñada para un control seguro y cómodo, mientras que los asientos acolchados y áreas de descanso garantizan confort para todos los pasajeros.\n\nUna embarcación perfecta para quienes buscan libertad, diversión y momentos inolvidables en el mar.",
        inclusiones: "Hielo, agua, refrescos, 12 cervezas o 2 botellas de vino blanco.",
        noIncluido: "Propina de la tripulación. Costo adicional si el punto de recogida es en una marina diferente."
    }
];

// Traducción functions
function traducirAmenidad(amenidad, lang) {
    if (lang === 'es') return amenidad;

    const traducciones = {
        "Amplio salón interior": "Spacious interior salon",
        "Patio exterior para comer al aire libre": "Outdoor patio for al fresco dining",
        "Flybridge expandido con asientos y bar mojado": "Expanded flybridge with seating and wet bar",
        "Skybridge con sillas lounge para observar el paisaje o el atardecer": "Skybridge with lounge chairs to observe the landscape or sunset",
        "Cocina": "Kitchen",
        "Jacuzzi para 6 personas": "Jacuzzi for 6 people",
        "Sistema de sonido de alta calidad": "High-quality sound system",
        "Televisores de pantalla grande": "Large screen TVs",
        "Sistema de karaoke para entretenimiento a bordo": "Karaoke system for onboard entertainment",
        "A/C": "A/C",
        "Starlink Wifi": "Starlink Wifi",
        "BBQ Grill": "BBQ Grill",
        "El yate cuenta con un salón interior espacioso y elegante, con sistemas de entretenimiento, bar totalmente equipado y asientos confortables para socializar o relajarse dentro de la embarcación": "The yacht features a spacious and elegant interior salon, with entertainment systems, fully equipped bar and comfortable seating for socializing or relaxing inside the vessel",
        "Amplio flybridge transformado en zona de socialización: ideal para tomar el sol, cenar al aire libre o disfrutar de un cóctel con vistas panorámicas": "Spacious flybridge transformed into a social area: ideal for sunbathing, al fresco dining or enjoying a cocktail with panoramic views",
        "Cubierta de proa con cojines y asientos, perfecta para descanso y vistas": "Bow deck with cushions and seating, perfect for rest and views",
        "Bimini opcional para sombra": "Optional bimini for shade",
        "Cocina completa": "Full kitchen",
        "Jacuzzi": "Jacuzzi",
        "Bluetooth sound system": "Bluetooth sound system",
        "Internet": "Internet",
        "Sala interior": "Interior salon",
        "Sala exterior": "Exterior salon",
        "Baño": "Bathroom",
        "Cocina equipada": "Equipped kitchen",
        "Sistema de sonido bluetooth": "Bluetooth sound system",
        "Sistema de sonido Bose": "Bose sound system",
        "Wifi": "Wifi",
        "Salón con cocina en \"U\" (galley) integrada, que crea un ambiente abierto y sociable": "Salon with integrated U-shaped galley, creating an open and sociable atmosphere",
        "Gran área de comedor y descanso, con ventanales que proporcionan luz natural y vistas al mar": "Large dining and rest area, with windows that provide natural light and sea views",
        "Estación de navegación accesible desde el salón/cockpit, que facilita maniobrar con seguridad y comodidad": "Navigation station accessible from the salon/cockpit, facilitating safe and comfortable maneuvering",
        "Cockpit protegido y áreas de descanso exterior ideales para comer o relajarse al aire libre": "Protected cockpit and exterior rest areas ideal for eating or relaxing outdoors",
        "Flybridge o \"Lounge Deck\" amplio, más grande que en modelos anteriores, con zonas de asientos y solárium que son perfectos para charlas, tomar el sol o ver el atardecer": "Spacious flybridge or \"Lounge Deck\", larger than previous models, with seating areas and solarium that are perfect for chatting, sunbathing or watching the sunset",
        "Espacio delantero con trampolines que facilitan el descanso sobre el agua y la exploración de zonas poco profundas": "Forward space with trampolines that facilitate rest on the water and exploration of shallow areas",
        "Salón interior y cabina con aire acondicionado": "Interior salon and cabin with air conditioning",
        "Sala exterior": "Exterior salon",
        "Proa acojinada": "Cushioned bowl",
        "Deck exterior con asoleadero y áreas para sentarse o relajarse al sol": "Exterior deck with sunbathing area and spaces to sit or relax in the sun",
        "Flybridge amplio con zona de mando y asientos para disfrutar del paisaje y socializar en alta mar": "Spacious flybridge with command area and seating to enjoy the landscape and socialize at sea",
        "Plataforma de baño y acceso al agua para natación o snorkel": "Swim platform and water access for swimming or snorkeling",
        "Cómodo salón interior donde relajarse con asientos confortables con aire acondicionado": "Comfortable interior salon to relax with comfortable seating with air conditioning",
        "Proa acolchada ideal para tomar el sol o recostarse con vistas al mar": "Cushioned bow ideal for sunbathing or reclining with sea views",
        "Comedor exterior perfecto para disfrutar alimentos y bebidas frescas mientras navegas": "Exterior dining area perfect for enjoying fresh food and drinks while sailing",
        "Plataforma de baño para acceso al agua": "Swim platform for water access",
        "Sala interior con aire acondicionado": "Interior salon with air conditioning",
        "Amplias áreas exteriores para relajarse, tomar el sol o disfrutar del paisaje oceánico": "Spacious exterior areas to relax, sunbathe or enjoy the ocean landscape",
        "Posibilidad de zonas sombreadas bajo la vela o bimini para confort en días soleados": "Possibility of shaded areas under the sail or bimini for comfort on sunny days",
        "Flybridge con área de mando y asientos elevados": "Flybridge with command area and elevated seating",
        "Cocina equipada (nevera, horno, cocina, utensilios)": "Equipped kitchen (refrigerator, oven, stove, utensils)",
        "Sistema de audio / altavoces exteriores y pantalla plana": "Audio system / exterior speakers and flat screen",
        "Wifi, bimini y equipos de navegación estándar": "Wifi, bimini and standard navigation equipment",
        "La combinación de diseño deportivo con acabados cuidados y funcionales hace de este yate una opción elegante y práctica para vivir momentos inolvidables en alta mar": "The combination of sporty design with careful and functional finishes makes this yacht an elegant and practical option for living unforgettable moments at sea",
        "Comedor": "Dining area",
        "Proa amplia acolchada": "Spacious padded bow"
    };

    return traducciones[amenidad] || amenidad;
}

function traducirDescripcion(descripcion, lang) {
    if (lang === 'es') return descripcion;

    const traducciones = {
        "92' President es un yate de lujo de 92 pies ideal para quienes buscan comodidad, entretenimiento y aventura en alta mar. Con amplios espacios interiores y exteriores, lujos como jacuzzi y sistema de sonido premium, además de actividades acuáticas incluidas, ofrece una experiencia náutica premium personalizada en la Bahía de Banderas.": "92' President is a 92-foot luxury yacht ideal for those seeking comfort, entertainment and adventure at sea. With spacious interior and exterior spaces, luxuries such as jacuzzi and premium sound system, plus included water activities, it offers a personalized premium nautical experience in Banderas Bay.",
        "El 85′ Azimut es un yate de lujo italiano con espacios amplios, diseño refinado y múltiples áreas de entretenimiento, ideal para charters de alto nivel en la región de Puerto Vallarta y destinos cercanos. Con capacidad generosa, comodidades modernas y opciones de actividades acuáticas, ofrece una experiencia náutica premium y versátil tanto para paseos diurnos como para eventos especiales en el mar.": "The 85′ Azimut is an Italian luxury yacht with spacious areas, refined design and multiple entertainment areas, ideal for high-end charters in the Puerto Vallarta region and nearby destinations. With generous capacity, modern amenities and water activity options, it offers a premium and versatile nautical experience for both day trips and special events at sea.",
        "Navegar en el 81' Sailboat ofrece una experiencia serena y panorámica de las costas de Puerto Vallarta, con vistas espectaculares de la Sierra Madre, playas doradas y el Pacífico — ideal para relajarse o tomar fotografías memorables.": "Sailing on the 81' Sailboat offers a serene and panoramic experience of the Puerto Vallarta coasts, with spectacular views of the Sierra Madre, golden beaches and the Pacific — ideal for relaxing or taking memorable photographs.",
        "El 60′ Mikelson es un yate deportivo de motor con flybridge de 60 pies. Es versátil para paseos de lujo, pesca deportiva en alta mar y avistamiento de ballenas, con espacios tanto interiores como exteriores cómodos y equipados para disfrutar el mar.": "The 60′ Mikelson is a 60-foot motor yacht with flybridge. It is versatile for luxury cruises, deep-sea sport fishing and whale watching, with both interior and exterior spaces that are comfortable and equipped to enjoy the sea.",
        "El Sea Ray Express 600 es un yate a motor tipo express cruiser diseñado para ofrecer comodidad, estilo y rendimiento en paseos costeros, chárter recreativo o cruceros de día completo. Es ideal para eventos privados, salidas al atardecer, paseos familiares o con amigos, gracias a su combinación de espacios interiores acogedores, zonas sociales exteriores y buen desempeño en el agua.": "The Sea Ray Express 600 is an express cruiser motor yacht designed to offer comfort, style and performance on coastal cruises, recreational charters or full-day cruises. It is ideal for private events, sunset outings, family or friends trips, thanks to its combination of cozy interior spaces, exterior social areas and good performance on the water.",
        "El 52′ Azimut es un yate a motor de lujo de tipo flybridge que combina el estilo italiano, el confort y un rendimiento marino ágil para ofrecer experiencias náuticas sofisticadas y memorables. Es un yate elegante, bien equipado y versátil, ideal para quienes buscan navegar con estilo y confort, ya sea en excursiones diurnas, salidas al atardecer o viajes más largos con familia y amigos.": "The 52′ Azimut is a luxury flybridge motor yacht that combines Italian style, comfort and agile marine performance to offer sophisticated and memorable nautical experiences. It is an elegant, well-equipped and versatile yacht, ideal for those seeking to sail with style and comfort, whether on day excursions, sunset outings or longer trips with family and friends.",
        "El Marquis 50 es un yate lujoso que combina estilo deportivo moderno, comodidad premium y un rendimiento suave en el agua. Este barco está diseñado para elevar cualquier salida al mar, perfecto para quienes buscan experiencias náuticas exclusivas en la Bahía de Banderas desde paseos al atardecer con pareja hasta celebraciones con amigos o aventuras familiares por la costa.": "The Marquis 50 is a luxurious yacht that combines modern sporty style, premium comfort and smooth performance on the water. This boat is designed to elevate any trip to sea, perfect for those seeking exclusive nautical experiences in Banderas Bay from sunset cruises with a partner to celebrations with friends or family adventures along the coast.",
        "El 47 Foutaine Pajot es un catamarán de vela moderno, elegante y versátil diseñado para cruceros confortables, largos recorridos o chárter con familia y amigos. Este multicasco combina espacio, luminosidad, ergonomía y rendimiento náutico en un diseño que lo hace ideal tanto para navegación costera como para travesías oceánicas. Proporciona gran estabilidad y volumen interior y exterior. Su casco y cubierta están diseñados para facilitar la navegación y maximizar el espacio útil a bordo, y su estética moderna destaca por líneas elegantes y ventanales panorámicos que llenan de luz los espacios interiores.": "The 47 Fountaine Pajot is a modern, elegant and versatile sailing catamaran designed for comfortable cruises, long trips or charters with family and friends. This multihull combines space, brightness, ergonomics and nautical performance in a design that makes it ideal for both coastal navigation and ocean crossings. It provides great stability and interior and exterior volume. Its hull and deck are designed to facilitate navigation and maximize useful space on board, and its modern aesthetics stand out for elegant lines and panoramic windows that fill interior spaces with light.",
        "El Sunseeker 46' representa la combinación perfecta entre lujo, deportividad y confort, fiel al inconfundible ADN británico de Sunseeker. Con líneas exteriores sofisticadas y un diseño interior cuidadosamente optimizado, esta embarcación ofrece una experiencia de navegación exclusiva tanto para escapadas de día como para estancias prolongadas. Su amplio flybridge y zonas de solárium invitan a disfrutar del mar con total privacidad, mientras que la bañera y el salón proporcionan espacios ideales para el relax y la vida social a bordo. En el interior, acabados de alta calidad, iluminación natural y una distribución inteligente crean un ambiente elegante y acogedor. Un yate diseñado para quienes buscan estilo, exclusividad y sensaciones únicas en el mar.": "The Sunseeker 46' represents the perfect combination of luxury, sportiness and comfort, true to Sunseeker's unmistakable British DNA. With sophisticated exterior lines and a carefully optimized interior design, this vessel offers an exclusive navigation experience for both day trips and extended stays. Its spacious flybridge and solarium areas invite you to enjoy the sea with total privacy, while the cockpit and salon provide ideal spaces for relaxation and social life on board. In the interior, high-quality finishes, natural lighting and intelligent distribution create an elegant and welcoming atmosphere. A yacht designed for those seeking style, exclusivity and unique sensations at sea.",
        "El Lagoon 42 es un catamarán que combina a la perfección espacio, estabilidad y confort, ofreciendo una experiencia de navegación relajada y sofisticada. Diseñado para disfrutar del mar con total comodidad, destaca por su amplitud, luminosidad y excelente distribución tanto en interior como en exterior. Su cockpit a nivel del salón, perfectamente integrado, crea un espacio social amplio y fluido, ideal para compartir momentos inolvidables fondeados o en navegación. Las zonas de solárium, junto con el puesto de mando elevado, permiten disfrutar del entorno con una vista privilegiada y una navegación segura. Gracias a su diseño equilibrado y a la reconocida ingeniería de Lagoon, el Lagoon 42 garantiza una navegación estable, eficiente y placentera, convirtiéndose en la elección ideal para quienes buscan libertad, confort y elegancia en el mar.": "The Lagoon 42 is a catamaran that perfectly combines space, stability and comfort, offering a relaxed and sophisticated navigation experience. Designed to enjoy the sea with total comfort, it stands out for its spaciousness, brightness and excellent distribution both inside and outside. Its cockpit at salon level, perfectly integrated, creates a wide and fluid social space, ideal for sharing unforgettable moments at anchor or while sailing. The solarium areas, together with the elevated command post, allow you to enjoy the surroundings with a privileged view and safe navigation. Thanks to its balanced design and Lagoon's recognized engineering, the Lagoon 42 guarantees stable, efficient and pleasant navigation, becoming the ideal choice for those seeking freedom, comfort and elegance at sea.",
        "El Lagoon 40 es un catamarán moderno y versátil, diseñado para ofrecer una experiencia de navegación cómoda, estable y llena de estilo. Su diseño inteligente maximiza el espacio y la funcionalidad, convirtiéndose en una opción perfecta tanto para escapadas de día como para estancias más largas a bordo. El amplio cockpit a nivel del salón crea una conexión fluida entre interior y exterior, ideal para disfrutar del mar en un ambiente relajado y social. Las zonas de descanso, junto con su puesto de mando bien integrado, permiten navegar con seguridad sin renunciar al confort. En el interior, destaca por su luminosidad, acabados contemporáneos y una distribución pensada para el bienestar de los invitados. Gracias a la reconocida calidad de Lagoon, el Lagoon 40 garantiza una navegación suave y estable, convirtiéndose en la elección ideal para quienes buscan libertad, comodidad y momentos inolvidables en el mar.": "The Lagoon 40 is a modern and versatile catamaran, designed to offer a comfortable, stable and stylish navigation experience. Its intelligent design maximizes space and functionality, becoming a perfect option for both day trips and longer stays on board. The spacious cockpit at salon level creates a fluid connection between interior and exterior, ideal for enjoying the sea in a relaxed and social atmosphere. The rest areas, together with its well-integrated command post, allow safe navigation without giving up comfort. In the interior, it stands out for its brightness, contemporary finishes and a distribution designed for the well-being of guests. Thanks to Lagoon's recognized quality, the Lagoon 40 guarantees smooth and stable navigation, becoming the ideal choice for those seeking freedom, comfort and unforgettable moments at sea.",
        "El 40' Ocean es una embarcación de pesca deportiva diseñada para ofrecer rendimiento, seguridad y confort en cada jornada en el mar. Robusta, potente y perfectamente equipada, es la elección ideal tanto para pescadores experimentados como para quienes desean vivir una auténtica experiencia de pesca de altura. Su amplia bañera de pesca proporciona el espacio necesario para trabajar cómodamente durante la acción, mientras que su estabilidad y excelente comportamiento en navegación garantizan salidas seguras incluso en condiciones exigentes. 40' Ocean está preparada para la pesca de especies pelágicas, combinando potencia y maniobrabilidad para alcanzar los mejores puntos de pesca con rapidez. En el interior, ofrece un ambiente funcional y confortable para el descanso entre jornadas, con camarote, baño y zona resguardada, aportando comodidad durante salidas prolongadas. Todo ello convierte al 40' Ocean en una plataforma de pesca fiable, eficiente y lista para la acción. Una embarcación pensada para quienes persiguen grandes capturas y experiencias inolvidables en el mar.": "The 40' Ocean is a sport fishing vessel designed to offer performance, safety and comfort on every trip at sea. Robust, powerful and perfectly equipped, it is the ideal choice for both experienced fishermen and those who want to live an authentic deep-sea fishing experience. Its spacious fishing cockpit provides the necessary space to work comfortably during the action, while its stability and excellent navigation behavior guarantee safe outings even in demanding conditions. 40' Ocean is prepared for pelagic species fishing, combining power and maneuverability to reach the best fishing spots quickly. In the interior, it offers a functional and comfortable environment for rest between trips, with cabin, bathroom and sheltered area, providing comfort during extended outings. All this makes the 40' Ocean a reliable, efficient and ready-for-action fishing platform. A vessel designed for those pursuing big catches and unforgettable experiences at sea.",
        "El Sea Ray 27 es una embarcación versátil y elegante, perfecta para quienes buscan comodidad, diversión y rendimiento en el mar. Con un diseño compacto y moderno, combina maniobrabilidad con espacios bien distribuidos, ofreciendo una experiencia náutica ágil y placentera.\n\nSu cockpit abierto permite disfrutar del sol y del entorno mientras se navega o se fondea, ideal para salidas de día. La zona de mando está diseñada para un control seguro y cómodo, mientras que los asientos acolchados y áreas de descanso garantizan confort para todos los pasajeros.\n\nUna embarcación perfecta para quienes buscan libertad, diversión y momentos inolvidables en el mar.": "The Sea Ray 27 is a versatile and elegant vessel, perfect for those seeking comfort, fun and performance at sea. With a compact and modern design, it combines maneuverability with well-distributed spaces, offering an agile and pleasant nautical experience.\n\nIts open cockpit allows you to enjoy the sun and surroundings while sailing or at anchor, ideal for day trips. The command area is designed for safe and comfortable control, while padded seats and rest areas guarantee comfort for all passengers.\n\nA perfect vessel for those seeking freedom, fun and unforgettable moments at sea.",
        "El Sea Ray L550 es un yate de lujo que destaca por su diseño moderno, alto rendimiento y confort excepcional. Con líneas elegantes y una presencia imponente, ofrece una experiencia náutica sofisticada pensada para quienes buscan exclusividad y estilo en cada travesía. Sus amplias zonas exteriores incluyen espacios de solárium, áreas de descanso y una distribución perfecta para el entretenimiento a bordo, permitiendo disfrutar del mar con total comodidad tanto en navegación como fondeado. El flybridge y la bañera proporcionan vistas privilegiadas y un ambiente ideal para socializar. En el interior, sorprende con un diseño contemporáneo, materiales de alta gama y una cuidada iluminación natural. Sus camarotes espaciosos, baños elegantes y salón panorámico crean un entorno refinado y acogedor, perfecto para estancias prolongas. Gracias a su potente motorización, estabilidad y tecnología avanzada, el Sea Ray L550 garantiza una navegación suave, segura y placentera, convirtiéndose en la elección ideal para quienes desean vivir el mar con lujo, confort y experiencias inolvidables.": "The Sea Ray L550 is a luxury yacht that stands out for its modern design, high performance and exceptional comfort. With elegant lines and an imposing presence, it offers a sophisticated nautical experience designed for those seeking exclusivity and style on every voyage. Its spacious exterior areas include solarium spaces, rest areas and a perfect distribution for onboard entertainment, allowing you to enjoy the sea with total comfort both while sailing and at anchor. The flybridge and cockpit provide privileged views and an ideal atmosphere for socializing. In the interior, it surprises with a contemporary design, high-end materials and careful natural lighting. Its spacious staterooms, elegant bathrooms and panoramic salon create a refined and welcoming environment, perfect for extended stays. Thanks to its powerful motorization, stability and advanced technology, the Sea Ray L550 guarantees smooth, safe and pleasant navigation, becoming the ideal choice for those who want to experience the sea with luxury, comfort and unforgettable experiences.",
        "El Azimut 59’ es la combinación perfecta entre elegancia italiana, confort absoluto y rendimiento en el mar. Diseñado para quienes buscan una experiencia náutica de alto nivel, este yate ofrece espacios amplios, acabados de lujo y una navegación suave y segura. Cuenta con flybridge panorámico, ideal para relajarse, tomar el sol o disfrutar de momentos inolvidables con vistas espectaculares. Sus áreas exteriores e interiores están pensadas para el entretenimiento y la comodidad, con una distribución inteligente que maximiza cada espacio. En el interior, el yate dispone de cabinas privadas finamente equipadas, una sala luminosa con diseño moderno y una cocina totalmente funcional, creando un ambiente sofisticado y acogedor. Su potencia y estabilidad garantizan una travesía placentera, perfecta tanto para recorridos costeros como para escapadas exclusivas. Ideal para charters privados, celebraciones especiales o días de lujo en el mar, el Azimut 59’ transforma cada travesía en una experiencia inolvidable.": "The Azimut 59’ is the perfect combination of Italian elegance, absolute comfort and performance at sea. Designed for those seeking a high-level nautical experience, this yacht offers spacious areas, luxury finishes and smooth, safe navigation. It features a panoramic flybridge, ideal for relaxing, sunbathing or enjoying unforgettable moments with spectacular views. Its exterior and interior areas are designed for entertainment and comfort, with an intelligent distribution that maximizes every space. Inside, features finely equipped private cabins, a bright room with modern design and a fully functional kitchen, creating a sophisticated and welcoming atmosphere. Its power and stability guarantee a pleasant crossing, perfect for both coastal tours and exclusive getaways. Ideal for private charters, special celebrations or luxury days at sea, the Azimut 59’ transforms every voyage into an unforgettable experience."
    };

    return traducciones[descripcion] || descripcion;
}

function traducirCabinasBanos(texto, lang) {
    if (lang === 'es') return texto;

    return texto
        .replace(/staterooms \(camarotes\) cómodos para dormir/gi, "comfortable staterooms for sleeping")
        .replace(/staterooms \(camarotes\)/gi, "staterooms")
        .replace(/baños/gi, "bathrooms")
        .replace(/baño/gi, "bathroom");
}

function extraerNumeroCabinasBanos(texto, lang) {
    if (!texto) return '';
    const num = texto.match(/^\d+/);
    if (!num) return texto.split(' ')[0];
    const numero = num[0];
    // Verificar si es baños (bathrooms)
    if (texto.toLowerCase().includes('baños') || texto.toLowerCase().includes('bathroom')) {
        return numero + (lang === 'es' ? ' baños' : ' bathrooms');
    }
    // Verificar si es cabinas (staterooms)
    else if (texto.toLowerCase().includes('stateroom') || texto.toLowerCase().includes('camarote')) {
        return numero + (lang === 'es' ? ' staterooms' : ' staterooms');
    }
    // Si no coincide con ninguno, devolver solo el número
    return numero;
}

function traducirNoIncluido(texto, lang) {
    if (lang === 'es') {
        // Traducir de inglés a español
        return texto
            .replace(/Crew gratuity/gi, 'Propina de la tripulación')
            .replace(/Extra cost applies if pickup location is in a different marina\./gi, 'Costo adicional si el punto de recogida es en una marina diferente.')
            .replace(/Extra charges incurred if pickup location is in a different marina\./gi, 'Cargos adicionales si el punto de recogida es en una marina diferente.');
    }
    if (lang === 'en') {
        // Traducir de español a inglés
        return texto
            .replace(/Propina de la tripulación/gi, 'Crew gratuity')
            .replace(/Costo adicional si el punto de recogida es en una marina diferente\./gi, 'Extra cost applies if pickup location is in a different marina.')
            .replace(/Cargos adicionales si el punto de recogida es en una marina diferente\./gi, 'Extra charges incurred if pickup location is in a different marina.');
    }
    return texto;
}

function traducirInclusiones(texto, lang) {
    if (!texto) return '';

    if (lang === 'en') {
        return texto
            .replace(/seis cervezas/gi, 'six beers')
            .replace(/seis refrescos/gi, 'six sodas')
            .replace(/Hielo/gi, 'Ice')
            .replace(/Agua/gi, 'Water')
            .replace(/refrescos/gi, 'sodas')
            .replace(/jugo/gi, 'juice')
            .replace(/fruta fresca/gi, 'fresh fruit')
            .replace(/guacamole/gi, 'guacamole')
            .replace(/ceviche/gi, 'ceviche')
            .replace(/botella de tequila/gi, 'bottle of tequila')
            .replace(/botellas de/gi, 'bottles of')
            .replace(/cervezas/gi, 'beers')
            .replace(/vino blanco/gi, 'white wine')
            .replace(/hielo/gi, 'ice')
            .replace(/agua/gi, 'water')
            .replace(/ o /g, ' or ')
            .replace(/Margarita de bienvenida/gi, 'Welcome margarita')
            .replace(/margaritas de bienvenida/gi, 'welcome margaritas')
            .replace(/sashimi de atún/gi, 'tuna sashimi')
            .replace(/hamburguesas a la parrilla/gi, 'grilled burgers')
            .replace(/Fajitas disponibles con costo adicional/gi, 'Fajitas available at extra cost')
            .replace(/Tostadas para ceviche/gi, 'Tostadas for ceviche')
            .replace(/pesca del día/gi, 'catch of the day')
            .replace(/para charters de pesca/gi, 'for fishing charters')
            .replace(/ y /g, ' and ')
            .replace(/hrs/gi, 'hours')
            .replace(/Barra libre premium/gi, 'Premium open bar')
            .replace(/menú de 4 tiempos/gi, '4 course menu')
            .replace(/chef a bordo/gi, 'chef on board')
            .replace(/entremeses/gi, 'hors d\'oeuvres')
            .replace(/papas/gi, 'chips')
            .replace(/Agua y hielo/gi, 'Water and ice');
    }

    if (lang === 'es') {
        return texto
            .replace(/Water/gi, 'Agua')
            .replace(/ice/gi, 'hielo')
            .replace(/sodas/gi, 'refrescos')
            .replace(/beers/gi, 'cervezas')
            .replace(/fresh fruit/gi, 'fruta fresca')
            .replace(/guacamole/gi, 'guacamole')
            .replace(/ceviche/gi, 'ceviche')
            .replace(/Welcome margarita/gi, 'Margarita de bienvenida')
            .replace(/juice/gi, 'jugo')
            .replace(/1 bottle of tequila/gi, '1 botella de tequila')
            .replace(/Fishing equipment/gi, 'Equipo de pesca')
            .replace(/Menu option available/gi, 'Opción de menú disponible')
            .replace(/Surf n' Turf meal/gi, 'Comida Surf n\' Turf')
            .replace(/tuna sashimi/gi, 'sashimi de atún')
            .replace(/Full 4 course menu/gi, 'Menú completo de 4 tiempos')
            .replace(/premium open bar/gi, 'barra libre premium')
            .replace(/12 beers or 2 white wine bottles/gi, '12 cervezas o 2 botellas de vino blanco')
            .replace(/chips/gi, 'papas')
            .replace(/hors d'oeuvres/gi, 'entremeses');
    }
    return texto;
}

function traducirWaterToys(texto, lang) {
    if (!texto) return '';

    if (lang === 'en') {
        return texto
            .replace(/equipo de snorkel/gi, 'snorkel gear')
            .replace(/\bsnorkel\b(?!\s*gear)/gi, 'snorkel gear')
            .replace(/tablas de paddle/gi, 'paddle boards')
            .replace(/tabla de paddle/gi, 'paddle board')
            .replace(/paddleboards/gi, 'paddle boards')
            .replace(/tobogán acuático/gi, 'waterslide')
            .replace(/bote auxiliar/gi, 'dinghy')
            .replace(/cañas de pesca/gi, 'fishing rods')
            .replace(/equipo de pesca/gi, 'fishing equipment')
            .replace(/cañas de pescar/gi, 'fishing rods')
            .replace(/para charters de pesca/gi, 'for fishing charters');
    }

    if (lang === 'es') {
        return texto
            .replace(/Snorkel gear/gi, 'Equipo de snorkel')
            .replace(/paddle boards/gi, 'tablas de paddle')
            .replace(/paddle board/gi, 'tabla de paddle')
            .replace(/lilypad/gi, 'lilypad')
            .replace(/waterslide/gi, 'tobogán acuático')
            .replace(/dinghy/gi, 'bote auxiliar')
            .replace(/fishing rods/gi, 'cañas de pescar')
            .replace(/fishing equipment/gi, 'equipo de pesca')
            .replace(/kayak/gi, 'kayak')
            .replace(/jacuzzi on board/gi, 'jacuzzi a bordo');
    }
    return texto;
}
