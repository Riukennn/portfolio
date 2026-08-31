new Swiper(".profileSwiper",{

    loop:true,

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    effect:"fade",

    speed:1200,

});

const cards = document.querySelectorAll(".experience-card");

cards.forEach(card => {

    card.onclick = () => {

        const id = card.dataset.modal;

        document.getElementById(id).classList.add("show");

    };

});

const closes = document.querySelectorAll(".close");

closes.forEach(btn => {

    btn.onclick = () => {

        btn.closest(".modal").classList.remove("show");

    };

});

window.onclick = (e)=>{

    if(e.target.classList.contains("modal")){

        e.target.classList.remove("show");

    }

};

new Swiper(".documentationSwiper", {
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*==========================
        SKILLS
===========================*/

const skills = [

{
    name: "Microsoft Office",
    icon: "fa-brands fa-microsoft",

    projects: [

        {
            title: "Pembuatan Laporan",
            description: "Membuat laporan menggunakan Microsoft Word dengan format profesional",
            images: [
                "images/office1.png"
            ]
        },

        {
            title: "Pengolahan Data Excel",
            description: "Mengolah data operasional PLN Icon Plus dan Indozone menggunakan Microsoft Excel, termasuk pemanfaatan rumus, tabel, grafik, serta fitur Excel lainnya untuk analisis dan penyusunan laporan",
            images: [
                "images/excel1.jpeg",
                "images/excel2.png"
            ]
        },

    ]
},

{
    name: "Flutter",
    icon: "devicon-flutter-plain colored",

    projects: [

        {
            title: "Aplikasi Absensi Magang",
            layout: "mobile",
            description: "Mengembangkan aplikasi absensi magang dan PKL untuk PLN Icon Plus KP Jember sebagai pengganti absensi manual berbasis tulisan. Aplikasi ini dibangun menggunakan Flutter dengan Firebase Authentication, Cloud Firestore, dan Geolocation",
            images:[
                "images/absensi1.jpeg",
                "images/absensi2.jpeg",
                "images/absensi3.jpeg",
                "images/absensi4.jpeg",
                "images/absensi5.jpeg",
                "images/absensi6.jpeg",
                "images/absensi7.jpeg"
            ]
        },

        {
            title: "Aplikasi Smartoge",
            layout: "mobile",
            description: "Merancang dan mengembangkan aplikasi mobile berbasis Flutter untuk monitoring dan kontrol penyiraman tanaman secara otomatis maupun manual. Aplikasi ini dikembangkan berdasarkan kebutuhan pengguna sebagai pendukung proyek tugas akhir, dengan fokus pada kemudahan pemantauan dan pengendalian melalui smartphone",
            images:[
                "images/smartoge1.jpeg",
                "images/smartoge2.jpeg",
                "images/smartoge3.jpeg",
                "images/smartoge4.jpeg"
            ]
        },

        {
            title: "Aplikasi Poultryrail",
            layout: "mobile",
            description: "Merancang dan mengembangkan aplikasi mobile berbasis Flutter untuk monitoring dan kontrol pemberian pakan ayam secara otomatis maupun manual. Aplikasi ini dikembangkan sebagai bagian dari tugas akhir dengan tujuan mempermudah pemantauan kondisi pakan, pengaturan jadwal pemberian pakan, serta pengendalian sistem melalui smartphone",
            images:[
                "images/poultryrail1.jpeg",
                "images/poultryrail2.jpeg",
                "images/poultryrail3.jpeg",
                "images/poultryrail4.jpeg",
                "images/poultryrail5.jpeg"
            ]
        }

    ]
},

{
    name: "Firebase",
    icon: "devicon-firebase-plain colored",

    projects: [

        {
            title: "Authentication",
            description: "Mengimplementasikan Login, Register, dan Reset Password menggunakan Firebase Authentication",
            images: [
                "images/firebase 1.png"
            ]
        },

        {
            title: "Realtime Database",
            description: "Menghubungkan aplikasi dengan Firebase Realtime Database untuk sinkronisasi data",
            images: [
                "images/firebase 2.png"
            ]
        },

        {
            title: "Cloud Firestore",
            description: "Mengelola data aplikasi menggunakan Cloud Firestore",
            images: [
                "images/firebase 3.png"
            ]
        }

    ]
},

{
    name: "Figma",
    icon: "devicon-figma-plain colored",

    projects: [

        {
            title: "UI Mobile",
            description: "Mendesain tampilan aplikasi mobile menggunakan Figma",
            images: [
                "images/figma1.png"
            ]
        },

        {
            title: "Website Design",
            description: "Membuat prototype website sebelum proses development",
            images: [
                "images/figma2.png"
            ]
        }

    ]
},

{
    name: "IoT",
    icon: "devicon-arduino-plain colored",

    projects: [

        {
            title: "Poultryrail",
            description: "Merancang dan membangun prototype sistem pemberian pakan ayam otomatis berbasis IoT menggunakan ESP32, Load Cell, sensor Ultrasonik, dan Firebase. Sistem terintegrasi dengan aplikasi mobile PoultryRail berbasis Flutter yang memungkinkan pengguna memantau kondisi pakan secara real-time serta mengontrol pemberian pakan secara otomatis berdasarkan jadwal maupun secara manual melalui smartphone",
            images: [
                "images/iot1.jpeg",
                "images/iot2.jpeg",
                "images/iot3.jpeg",
                "images/iot4.jpeg",
                "images/iot5.jpeg"
            ]
        },

    ]
},

{
    name: "HTML • CSS • JavaScript",

    icons: `
        <div class="multi-logo">
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
        </div>
    `,

    projects: [

        {
            title: "Website Tans Therapy Centre",
            description: "Merancang dan mengembangkan website Tans Therapy Centre sebagai media informasi dan layanan pelanggan. Website menyediakan fitur booking layanan, informasi harga, tanya jawab (FAQ), informasi terapi, serta berbagai layanan pendukung lainnya untuk memudahkan interaksi antara pelanggan dan pihak Tans Therapy Centre",
            images: [
                "images/html1.png",
                "images/html2.png",
                "images/html3.png",
                "images/html4.png",
                "images/html5.png"
            ]
        },

    ]
},

{
    name: "Laravel",
    icon: "devicon-laravel-original colored",

    projects: [

        {
            title: "Portfolio Website",
            description: "Membangun website portfolio pribadi menggunakan Laravel, Blade, HTML, CSS, dan JavaScript dengan desain responsif untuk menampilkan pengalaman, keterampilan, proyek, serta informasi kontak secara interaktif.",
            images: [
                "images/laravel1.png",
                "images/laravel2.png",
                "images/laravel3.png",
                "images/laravel4.png"
            ]
        }

    ]
}

];

const skillsGrid = document.querySelector(".skills-grid");

skills.forEach((skill,index)=>{

skillsGrid.innerHTML += `
<div class="skill-box" data-id="${index}">

${skill.icons ??
`<i class="${skill.icon}"></i>`}

<p>${skill.name}</p>

</div>

`;

});

const modal = document.getElementById("skillModal");
const closeSkill = document.getElementById("closeSkill");

const skillName = document.getElementById("skillName");
const skillIcon = document.getElementById("skillIcon");
const projectList = document.getElementById("projectList");

document.querySelectorAll(".skill-box").forEach(box => {

    box.onclick = function () {

        const data = skills[this.dataset.id];

        // Judul Skill
        skillName.textContent = data.name;

        // Logo Skill
        if (data.icon) {
            skillIcon.className = data.icon;
            skillIcon.style.display = "block";
        } else {
            skillIcon.style.display = "none";
        }

        // Hapus project lama
        projectList.innerHTML = "";

        // Tambahkan project baru
        data.projects.forEach(project => {

            projectList.innerHTML += `
                <div class="project-card">

                    <div class="project-header">

                        <h3>${project.title}</h3>

                        <button class="project-toggle">
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>

                    </div>

                    <div class="project-detail">

                    ${
                    project.layout==="mobile"

                    ?

                    `

                    <div class="mobile-layout">

                        <div class="mobile-swiper swiper">

                            <div class="swiper-wrapper">

                                ${project.images.map(img=>`

                                    <div class="swiper-slide">
                                        <a href="${img}" data-fancybox="gallery-${project.title}">
                                            <img src="${img}">
                                        </a>
                                    </div>

                                `).join("")}

                            </div>

                            <div class="swiper-pagination"></div>

                        </div>

                        <div class="mobile-description">

                            <p>${project.description}</p>

                        </div>

                    </div>

                    `

                    :

                    `

                    <p>${project.description}</p>

                    <div class="project-swiper swiper">

                        <div class="swiper-wrapper">

                            ${project.images.map(img=>`

                                <div class="swiper-slide">
                                    <a href="${img}" data-fancybox="gallery-${project.title}">
                                        <img src="${img}">
                                    </a>
                                </div>

                            `).join("")}

                        </div>

                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-pagination"></div>

                    </div>

                    `

                    }

                    </div>
            `;

        });

        // Event dropdown project
        document.querySelectorAll(".project-toggle").forEach(btn => {

            btn.onclick = function () {

                const currentCard = this.closest(".project-card");

                // Tutup semua project selain yang diklik
                document.querySelectorAll(".project-card").forEach(card => {

                    if(card !== currentCard){

                        card.classList.remove("active");

                        const icon = card.querySelector(".project-toggle i");

                        icon.classList.remove("fa-chevron-up");
                        icon.classList.add("fa-chevron-down");

                    }

                });

                // Toggle project yang diklik
                currentCard.classList.toggle("active");

                const icon = this.querySelector("i");

                if(currentCard.classList.contains("active")){

                    icon.classList.remove("fa-chevron-down");
                    icon.classList.add("fa-chevron-up");

                }else{

                    icon.classList.remove("fa-chevron-up");
                    icon.classList.add("fa-chevron-down");

                }

            }

        });

        // Tampilkan modal
        modal.classList.add("show");

        setTimeout(()=>{

    // Flutter (layout HP)
    document.querySelectorAll(".mobile-swiper").forEach(swiper=>{

        new Swiper(swiper,{

            loop:true,

            autoplay:{
                delay:2500
            },

            pagination:{
                el:swiper.querySelector(".swiper-pagination"),
                clickable:true
            }

        });

    });

    // Semua skill lain
    document.querySelectorAll(".project-swiper").forEach(swiper=>{

        new Swiper(swiper,{

            loop:true,

            autoplay:{
                delay:3000
            },

            pagination:{
                el:swiper.querySelector(".swiper-pagination"),
                clickable:true
            },

            navigation:{
                nextEl:swiper.querySelector(".swiper-button-next"),
                prevEl:swiper.querySelector(".swiper-button-prev")
            }

        });

    });

},100);

    }

});

// Tombol close
closeSkill.onclick = function () {
    modal.classList.remove("show");
};

// Klik area luar modal untuk menutup
window.onclick = function(e){
    if(e.target == modal){
        modal.classList.remove("show");
    }
}