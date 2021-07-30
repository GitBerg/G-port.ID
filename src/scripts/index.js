let sidebar = document.querySelector('.sidebar');

function showSideBar(){
    sidebar.classList.toggle('active')
}

async function hideSideBar(){
    const corpo =  await document.documentElement.querySelector('.container');
    const width =  await corpo.clientWidth;
    
    if(width < 960 && sidebar.className === 'sidebar active'){
        sidebar.classList.toggle('active')
    }

}