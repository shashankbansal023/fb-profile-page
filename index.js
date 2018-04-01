
let myFacebookToken;

$(document).ready(() => {

	myFacebookToken = prompt("Enter your facebook token: "," ");
	if(myFacebookToken==null || myFacebookToken == ''){
		alert('Incorrect input');
	}
	else{
		getAllDetails();
	}
})


let getAllDetails= () =>{

	$.ajax({
		type:'GET',
		dataType:'json',
		async:true,
		url:'https://graph.facebook.com/me?fields=name,friends,birthday,hometown,education,music{description,cover,name},photos{images},cover,albums{photos{images}},picture.type(large)&access_token=' + myFacebookToken,

		success:(response) =>{

			$('.container').css('display','block');
			
			console.log(response);

			$('#profilePhoto').html('<img src="'+response.picture.data.url+'" class="img-fluid profileHeight">');
			
			$('#cover').css('background-image','url(' + response.cover.source+ ')');

			$('#name').append(response.name);
			
			$('#birthday').append(response.birthday);

			$('#hometown').append(response.hometown.name);

			$("#school").append(response.education[0].school.name);

			$('#university').append(response.education[1].school.name);

			$('#friends').append(response.friends.summary.total_count);
			
			$('.firstPhoto').html('<img src="'+ response.albums.data[0].photos.data[0].images[0].source +'" class="img-fluid">');	
			$('.secondPhoto').html('<img src="'+ response.albums.data[0].photos.data[1].images[0].source +'" class=" img-fluid">');
			$('.thirdPhoto').html('<img src="'+ response.albums.data[0].photos.data[2].images[0].source +'" class=" img-fluid">');
			$('.fourthPhoto').html('<img src="'+ response.albums.data[0].photos.data[3].images[0].source +'" class=" img-fluid">');
			$('.fifthPhoto').html('<img src="'+ response.albums.data[0].photos.data[4].images[0].source +'" class=" img-fluid">');
			$('.sixthPhoto').html('<img src="'+ response.albums.data[0].photos.data[5].images[0].source +'" class=" img-fluid">');
			$('.seventhPhoto').html('<img src="'+ response.albums.data[0].photos.data[6].images[0].source +'" class=" img-fluid">');
			$('.eighthPhoto').html('<img src="'+ response.albums.data[0].photos.data[7].images[0].source +'" class=" img-fluid">');
			
			
			$('.image1').attr('src',response.music.data[0].cover.source);
			$('.image2').attr('src',response.music.data[1].cover.source);
			$('.image3').attr('src',response.music.data[2].cover.source);
			$('.image4').attr('src',response.music.data[3].cover.source);

			$('#text1').append(response.music.data[0].name);
			$('#text2').append(response.music.data[1].name);
			$('#text3').append(response.music.data[2].name);
			$('#text4').append(response.music.data[3].name);

			
		},
		error:(err) =>{

			console.log(err.responseJSON.error.message);
			alert(err.responseJSON.error.message);
		}
	});


	// fields=posts{created_time,type,full_picture,story,message,source}

}

