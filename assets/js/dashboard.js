const internPage = document.querySelector(".intern_page")
const uploadPage = document.querySelector(".upload_page")
const addWorkPage = document.querySelector(".add_work_page")

const rightSide = document.querySelector(".right_side")

uploadPage.addEventListener("click", ()=>{
    internPage.classList.remove("left_side_active")
    addWorkPage.classList.remove("left_side_active")
    uploadPage.classList.add("left_side_active")
    // if(internPage.classList.contains("left_side_active") && )
    addUpload()
})


internPage.addEventListener("click", ()=>{
    internPage.classList.add("left_side_active")
    addWorkPage.classList.remove("left_side_active")
    uploadPage.classList.remove("left_side_active")

    addIntern()
})


function addUpload(){
    rightSide.innerHTML = "";
    const newEl = document.createElement("div")

    newEl.innerHTML = `
    <div class="gd-upload-container">
                    <h2>Graphic Design Upload</h2>
                    <div class="gd-form-container">
                        <form action="POST" class="gd-form">
                            <label for="name">Designer Name</label>
                            <input type="text" name="name" id="name" required>
            
                            <label for="catagory">File Catagory</label> 
                            <select name="catagory" id="catagory">
                                <option value="video" class="ctg">Video File</option>
                                <option value="jpeg" class="ctg">Logo/Cover Photo</option>
                                <option value="gif" class="ctg">Gif File</option>
                                <option value="animation" class="ctg">Animation File</option>
                            </select>
                            
                            <label for="file">Upload Documents</label>
                            <input class="upload" type="file" name="upload-file" id="file" required>
                            <span>Only upload these(png, jpeg, jpg, psd, ai, animation, Gif, mp4, wmv)files</span>
                            <input type="button" value="Submit" class="button">
                        </form>
                    </div>
                </div>

    `

    rightSide.appendChild(newEl)

}


function addIntern(){
    rightSide.innerHTML = "";
    const newEl = document.createElement("div")

    newEl.innerHTML = `
    <div class="search_box">
                    <input type="search" name="search" id="search" placeholder="search for interns">
                    <button>Search</button>
                </div>

                <div class="details">
                    <div class="content">
                        <div class="upper">
                            <div class="img">
                                <img src="assets/img/apu-photo.jpg" alt="">
                            </div>

                            <div class="name">
                                <p>Apu Chandra Das</p>
                                <span>Front End Developer</span>
                            </div>

                            <div class="social">
                                <h3>Social Media</h3>
                                <div class="social-medias">
                                    <ul>
                                        <li><a href="#">FaceBook</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">LinkedIn</a></li>
                                        <li><a href="#">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div class="bottom">
                            <div class="left">
                                <h4>Worked Files</h4>
                                
                                <ul>
                                    <li><a href="#">A Website</a></li>
                                    <li><a href="#">B Website</a></li>
                                    <li><a href="#">C Website</a></li>
                                    <li><a href="#">D Website</a></li>
                                    <li><a href="#">E Website</a></li>
                                </ul>
                            </div>
                            <div class="right">
                                <h4>Portfolio Files</h4>
                                
                                <ul>
                                    <li><a href="#">A Website</a></li>
                                    <li><a href="#">B Website</a></li>
                                    <li><a href="#">C Website</a></li>
                                    <li><a href="#">D Website</a></li>
                                    <li><a href="#">E Website</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
    
    `


    rightSide.appendChild(newEl)
}

