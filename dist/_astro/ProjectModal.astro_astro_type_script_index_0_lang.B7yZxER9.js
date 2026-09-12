var e={"it-1":{title:`EduTech Campus Portal & Learning Management System`,category:`IT & Web Development`,image:`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop`,overview:`A high-performance student portal and assignment submission system built with modern web technologies, serving over 2,000 active university users.`,role:`Lead Frontend Developer & System Architect`,impact:`Reduced assignment load times by 45% and enhanced mobile usability score to 98/100.`,tools:[`React`,`Tailwind CSS`,`Node.js`,`MySQL`,`Git`],link:`#`},"it-2":{title:`Smart Inventory & Asset Management Dashboard`,category:`IT & Web Development`,image:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop`,overview:`An intuitive admin dashboard for real-time warehouse inventory tracking, data visualization, and reporting.`,role:`Full Stack Developer`,impact:`Automated monthly inventory audits, saving up to 15 hours of manual data entry per week.`,tools:[`JavaScript`,`Tailwind CSS`,`Chart.js`,`REST API`],link:`#`},"design-1":{title:`HealthCare Mobile App UI/UX Redesign`,category:`Design Project`,image:`https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop`,overview:`Complete end-to-end UX research and UI design for a patient telemedicine and appointment booking application.`,role:`UI/UX Designer`,impact:`Achieved 92% positive rating in usability testing with 30 target user participants.`,tools:[`Figma`,`Adobe Illustrator`,`Wireframing`,`Prototyping`],link:`#`},"design-2":{title:`Corporate Brand Identity & Design System`,category:`Design Project`,image:`https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop`,overview:`Developed comprehensive brand guidelines, logo variants, color palettes, and typography rules for a fintech startup.`,role:`Brand Designer`,impact:`Established cohesive brand presence across web, mobile, and print assets.`,tools:[`Figma`,`Adobe Photoshop`,`Branding`],link:`#`},"video-1":{title:`University Annual Tech Summit Aftermovie & Teasers`,category:`Video Editing`,image:`https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop`,overview:`Dynamic highlight video and social media teaser reels covering a 3-day tech event with over 1,000 attendees.`,role:`Video Editor & Colorist`,impact:`Gained over 25,000 combined views across Instagram Reels and YouTube.`,tools:[`Premiere Pro`,`After Effects`,`CapCut`,`Sound Design`],link:`#`},"marketing-1":{title:`National Student Competition Digital Campaign`,category:`Digital Marketing`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop`,overview:`Integrated multi-channel marketing campaign across Instagram, LinkedIn, and Meta Ads to drive event registration.`,role:`Marketing Lead`,impact:`Exceeded target registrations by 140% with a 3.8x ROI on paid ad spend.`,tools:[`Meta Ads`,`Google Analytics`,`Copywriting`,`SEO`],link:`#`}};function t(t){let n=e[t];if(!n)return;let r=document.getElementById(`project-modal`),i=document.getElementById(`project-modal-content`);r&&i&&(i.innerHTML=`
            <span class="inline-block px-3 py-1 bg-purple-100 text-brand-purple text-xs font-semibold rounded-full mb-3">${n.category}</span>
            <h2 class="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-4">${n.title}</h2>

            <div class="rounded-xl overflow-hidden mb-6 bg-slate-100 max-h-72">
                <img src="${n.image}" alt="${n.title}" class="w-full h-full object-cover">
            </div>

            <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                <div>
                    <h4 class="font-bold text-slate-900 mb-1">Overview</h4>
                    <p>${n.overview}</p>
                </div>
                <div>
                    <h4 class="font-bold text-slate-900 mb-1">Role & Responsibility</h4>
                    <p>${n.role}</p>
                </div>
                <div>
                    <h4 class="font-bold text-slate-900 mb-1">Key Impact / Result</h4>
                    <p class="text-emerald-700 font-semibold">${n.impact}</p>
                </div>
            </div>

            <div class="mb-6">
                <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Technologies & Tools Used</h4>
                <div class="flex flex-wrap gap-2">
                    ${n.tools.map(e=>`<span class="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium">${e}</span>`).join(``)}
                </div>
            </div>

            <div class="flex justify-end pt-4 border-t border-slate-100">
                <button id="close-project-modal-inner" class="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors mr-2">
                    Close
                </button>
                <a href="${n.link}" target="_blank" class="px-6 py-2.5 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center">
                    <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i> View Live Demo
                </a>
            </div>
        `,r.classList.remove(`hidden`),document.getElementById(`close-project-modal-inner`)?.addEventListener(`click`,()=>{r.classList.add(`hidden`)}))}document.getElementById(`close-project-modal`)?.addEventListener(`click`,()=>{document.getElementById(`project-modal`)?.classList.add(`hidden`)}),document.querySelectorAll(`.project-detail-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.getAttribute(`data-project`);n&&t(n)})}),document.getElementById(`project-modal`)?.addEventListener(`click`,e=>{e.target===e.currentTarget&&document.getElementById(`project-modal`)?.classList.add(`hidden`)});