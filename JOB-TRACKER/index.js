let addBtn = document.querySelector("#addBtn")
let applicationForm = document.querySelector("#applicationForm")

let company = document.querySelector("#company")
let role = document.querySelector("#role")
let jobLocation = document.querySelector("#location")
let appliedDate = document.querySelector("#appliedDate")

let interviewDate = document.querySelector("#interviewDate")


let jobLink = document.querySelector("#jobLink")
let job_status = document.querySelector("#job_status")
let searchInput = document.querySelector("#searchInput")
let saveBtn = document.querySelector("#saveBtn")
let applicationsContainer = document.querySelector("#applications")
let searchBtn = document.querySelector("#searchBtn")
let statusFilter = document.querySelector("#statusFilter")
let applications = JSON.parse(localStorage.getItem("applications")) || []

let editindex
let sortDate = document.querySelector("#sortDate")

  let chart_box = document.querySelector("#statusChart")


let total_count = document.querySelector("#total_count");
let applied_count = document.querySelector("#applied_count");
let interview_count = document.querySelector("#interview_count");
let selected_count = document.querySelector("#selected_count");
let rejected_count = document.querySelector("#rejected_count");



let interviewRemindersList = document.querySelector("#interviewRemindersList")



let darkLightBtn = document.querySelector("#DARK_AND_LIGHT");


let myChart
show_details()
let now = new Date()

let day = now.getDate()        
let month = now.getMonth() + 1 
let year = now.getFullYear()  






addBtn.addEventListener("click", function () {

    applicationForm.style.display = "block"

    editindex = undefined

    company.value = ""
    role.value = ""
    jobLocation.value = ""
    appliedDate.value = ""
    interviewDate.value = ""
    jobLink.value = ""
    job_status.value = "Applied"
})

function save_details() {

    let new_application = {

        id: Math.floor(Math.random() * 1000 + 1),

        company: company.value.trim(),

        role: role.value.trim(),

        location: jobLocation.value.trim(),

        appliedDate: appliedDate.value,
        interviewDate: interviewDate.value,

        jobLink: jobLink.value.trim(),

        job_status: job_status.value
    }

    if (editindex === undefined) {

        applications.push(new_application)

    } 
    else {

        new_application.id = applications[editindex].id

        applications[editindex] = new_application

        editindex = undefined
    }

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    )

    company.value = ""
    role.value = ""
    jobLocation.value = ""
    appliedDate.value = ""
    interviewDate.value = "" 
    jobLink.value = ""
    job_status.value = "Applied"

    applicationForm.style.display = "none"

    show_details()
    updatedate()
}

saveBtn.addEventListener("click", save_details)

function show_details(data = applications) {

    applicationsContainer.innerHTML = ""

    for (let i = 0; i < data.length; i++) {

        applicationsContainer.innerHTML += `

            <div class="app_detail">

                <div class="application_details">

                    <h3>
                        COMPANY = ${data[i].company}
                    </h3>

                    <p>
                        ROLE = ${data[i].role}
                    </p>

                    <p>
                        LOCATION = ${data[i].location}
                    </p>

                    <p>
                        DATE = ${data[i].appliedDate}
                    </p>

                    <p>

                        INTERVIEW_DATE = ${data[i].interviewDate}
                    </p>

                    <a
                        href="${data[i].jobLink}"
                        target="_blank"
                    >
                        ${data[i].jobLink}
                    </a>

                    <p>
                        JOB STATUS = ${data[i].job_status}
                    </p>

                    <button
                        class="btn2"
                        onclick="deleteApp(${data[i].id})"
                    >
                        DELETE ONE
                    </button>

                    <button
                        class="btn"
                        onclick="editApplication(${data[i].id})"
                    >
                        EDIT BUTTON
                    </button>

                </div>

            </div>
        `
    }
}

function deleteApp(id) {

    applications = applications.filter(function(app) {

        return app.id !== id

    })

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    )

    show_details()
}

function editApplication(id) {

    editindex = applications.findIndex(function(app) {

        return app.id === id

    })

    let app = applications[editindex]

    company.value = app.company
    role.value = app.role
    jobLocation.value = app.location
    appliedDate.value = app.appliedDate
    interviewDate.value = app.interviewDate 
    jobLink.value = app.jobLink
    job_status.value = app.job_status

    addBtn.style.display = "none"
    saveBtn.style.display = "inline-block"
    applicationForm.style.display = "block"
}

function searchApplications() {

    let searchText = searchInput.value.toLowerCase().trim()
    let selectedStatus = statusFilter.value
    let filteredApplications = applications.filter(function(app) {
          
        
        
        
        let matchsearch =  app.company.toLowerCase().includes(searchText) ||
               app.role.toLowerCase().includes(searchText)
        let matchstatus = (selectedStatus === "All Status") || (selectedStatus === app.job_status);


               return matchsearch && matchstatus
      
               
             
    })
    let sortOrder = sortDate.value

filteredApplications.sort(function (a, b) {
  let dateA = new Date(a.appliedDate)
  let dateB = new Date(b.appliedDate)

  if (sortOrder === "newest") {
    return dateB - dateA
  } else {
    return dateA - dateB
  }
})

   

    show_details(filteredApplications)
}
sortDate.addEventListener("change", searchApplications);








searchBtn.addEventListener("click", searchApplications)

let updatedashbord = function updatedashbord (params) {
    let totalcount = 0
    let appliedcount = 0 
    let selectedcount = 0
    let interviewcount = 0
    let rejectedcount = 0
    
        for (let i = 0; i < applications.length; i++) {

    if (applications[i].job_status === "Applied") {
        appliedcount++
    }

    else if (applications[i].job_status === "Interview") {
        interviewcount++
    }

    else if (applications[i].job_status === "Selected") {
        selectedcount++
    }

    else if (applications[i].job_status === "Rejected") {
        rejectedcount++
    }
}
    
total_count.innerText = applications.length
  applied_count.innerText = appliedcount
  interview_count.innerText = interviewcount
  selected_count.innerText = selectedcount
  rejected_count.innerText = rejectedcount


updateChart(appliedcount, interviewcount, selectedcount, rejectedcount)
}

updatedashbord();

let Dark_LIGHT_MODE = darkLightBtn.addEventListener("click", function () {

    if (document.body.style.backgroundColor === "black") {
 document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
       darkLightBtn.innerText = "Dark Mode"

    } else {
  document.body.style.backgroundColor = "black"
        document.body.style.color = "hsl(162, 93%, 11%)"
         darkLightBtn.innerText = "Light Mode"

    }

})







function updateChart(applied, interview, selected, rejected) {

   

    if (myChart !== undefined) {
        myChart.destroy()
    }

    myChart = new Chart(chart_box, {

        type: "doughnut",

        data: {   
            
            

            labels: ["Applied", "Interview", "Selected", "Rejected"],

            datasets: [{

               
                data: [applied, interview, selected, rejected],

                backgroundColor: [
                    "#eab308",
                    "#8b5cf6",
                    "#22c55e",
                    "#ef4444"
                ]

            }]

        }

    })

}

   

function updatedate(params) {
    let day = now.getDate()        
let month = now.getMonth() + 1 
let year = now.getFullYear()  
let todayString = `${year}-${month}-${day}`

for (let i = 0; i < applications.length; i++) {
        let  = applications[i].interviewDate

                    if (applications[i].job_status === "Interview" && interviewDate) {

 if (interviewDate === todayString) {
                console.log(`today's interview: ${applications[i].company}`)


         } 
            else if (interviewDate > todayString) {

           interviewRemindersList.innerHTML+= `
                <div class="reminder-card">
                    <h4>COMPANY = ${applications[i].company}</h4>
                    <p> INTERVIEW DATE = ${applications[i].interviewDate}</p>
                    <p> ROLE = ${applications[i].role}
                </div>
            `
          // console.log(`Upcoming interview: ${applications[i].company} on ${applications[i].interviewDate}`)
        }
           
        }
    }


}

updatedate()

//console.log(`${year}-${month}-${day}`)