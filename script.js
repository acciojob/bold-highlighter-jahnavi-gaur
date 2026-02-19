let strongs = document.querySelectorAll('strong')

function highlight() {
    //Write your code here
	strongs.forEach((strong)=>{
		strong.style.color = 'rgb(0, 128, 0)'
	})
}


function return_normal() {
    //Write your code here
	strongs.forEach((strong)=>{
		strong.style.color = 'rgb(0, 0, 0)'
	})
}
