document.querySelectorAll(".sectionAccess").forEach(sectionAccessButton=>{
    sectionAccessButton.onclick=function(){
        internalLink=document.createElement("a")
        internalLink.href=sectionAccessButton.id
        internalLink.click()
    }
})
