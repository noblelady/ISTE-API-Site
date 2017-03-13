//now what?
//api:  http://www.ist.rit.edu/api/
$(document).ready(function(){

$.backstretch("http://bestfons.ru/_ph/24/985579237.jpg");
myXhr('get',{path:'/about/'},'#about-quote').done(function(json){
  $('#about').append('<h1>' + json.title + '</h1> <hr>' +
  '<p>' + json.description + '</p>' +
  '<p>"' + json.quote + '"</p>' +
  '<h3> <b>-</b> ' + json.quoteAuthor + '</h3>'
);
});

myXhr('get',{path:'/degrees/undergraduate/'},'#undergrad-degrees').done(function(json){
  var x  =  '<h2>Undergraduate:</h2>';
  $.each(json.undergraduate,function(i, item){
    //console.log(item.degreeName);
    //x += '<h2>' + item.title +'</h2>';
    x += '<h3>' + item.title +'</h3>' + '<p>' + item.description + '</p> <p>Concentrations:</p>';
    //want to get concentration
    $.each(item.concentrations,function(j, newItem){
      //console.log(newItem);
      x += '<p> &#9679; ' + newItem +'</p>';
    }); //end second each
  });//end first each
  $('#undergraduate').html(x);
}); //end get undergrad degrees

myXhr('get',{path:'/degrees/graduate/'},'#graduate-degrees').done(function(json){
  var x = '<h2>Graduate</h2>';
  var y = '<h2>Advanced Certificates</h2>';
  $.each(json.graduate,function(i, item){
    if(!item.title)
    {
      y += '<h3>' + item.degreeName + '</h3>';
      //do something
      $.each(item.availableCertificates, function(j,newItem){
        y += '<p> &#9679;'+newItem +'</p>';
      });
    }else {
      //console.log(item.degreeName);
      x += '<h3>' + item.title +'</h3>' + '<p>' + item.description + '</p>';
      $.each(item.concentrations,function(j, newItem){
        //console.log(newItem);
        x += '<p> &#9679; ' + newItem +'</p>';
      }); //end second each
    }
  });//end of each
  $('#graduate').html(x);
  $('#adv-cert').html(y);
});//end of graduate function

myXhr('get',{path:'/minors/'},'#minors').done(function(json){
  var x = '';
  var y = '';
  $.each(json,function(i, item){
    //console.log(item.name);
    x +='<a href="#" data-featherlight="#'+item.name+'"><div class="mediabox minor"><h2>' + item.title +'</h2>';
    y += '<div id='+item.name+'>'+'<h2>'+item.title+'</h2><p>' + item.description + '</p>'+'<p>Courses</p>';
    $.each(item.courses,function(j, newItem){
      //console.log(newItem);
      y += '<p> &#9679; ' + newItem +'</p>';
    }); //end second each
    y +='</div>';
    x += '</div></a>';
    $('#minorsHolding').html(y);
  });//end first each
  $('#section-3').append(x);
});

myXhr('get',{path:'/employment/introduction'},'#employment_0').done(function(json){
  var x = '';
  x += '<h2>'+json.introduction.title+'</h2>' +
  '<h3>' + json.introduction.content[0].title + '</h3>' +
  '<p>' + json.introduction.content[0].description +'</p>';
  $('#intro-e').html(x);
});

myXhr('get',{path:'/employment/degreeStatistics'},'#employment-stats').done(function(json){
  var x = '';
  x += '<h3>'+json.degreeStatistics.title+'</h3>';
  $.each(json.degreeStatistics.statistics,function(i,item){
    //console.log(item.value);
    x+= '<p>'+ item.value+'<br>'+ item.description+'</p>';
  });
  $('#stats').html(x);
});

myXhr('get',{path:'/employment/introduction'},'#employment_1').done(function(json){
  var x = '';
  x += '<h3>' + json.introduction.content[1].title + '</h3>' +
  '<p>' + json.introduction.content[1].description +'</p>';
  $('#intro-ce').html(x);
});

myXhr('get',{path:'/employment/coopTable/'},'#coop').done(function(json){
  var info = '<tbody>';
  $.each(json.coopTable.coopInformation, function(i,item){
    info += '<tr><th>' + item.employer + '</th>'+
    '<th>' +item.degree + '</th>'+
    '<th>' + item.city + '</th>'+
    '<th>' +item.term + '</th></tr>';
  });
  info += '</tbody>';
  $('#coop-table').append(info);
  $('#coop-table').DataTable();
});

//news

myXhr('get',{path:'/news/'},'#news').done(function(json){
  //do something
  var x='<hr><h1>NEWS</h1><div class="mediaboxAA">';
  $.each(json.year,function(i,item){
    //item === this NOT $(this) this
    x+='<h3>'+item.title+'</h3>'+'<h3>'+item.date+'</h3>'+'<p>'+item.description+'</p>';
  });
  x += '</div>';
  $('#section-1').append(x);
});

//research
myXhr('get',{path:'/research/'},'#r-interest').done(function(json){
  //do something
  var x='<h1 class="rCenter">Interest</h1><div class="mediaboxAA">';
  $.each(json.byInterestArea,function(i,item){
    x+='<hr><h2>'+item.areaName+'</h2>';
    $.each(item.citations,function(j,newItem){
      x+='<p>'+newItem+'</p>'
    });
  });
  x += '</div>';
  $('#interest').append(x);
});
myXhr('get',{path:'/research/'},'#r-faculty').done(function(json){
  //do something
  var x='<h1 class="rCenter">Faculty</h1><div class="mediaboxAA">';
  $.each(json.byFaculty,function(i,item){
    x+='<hr><h2>'+item.facultyName+'</h2>';
    $.each(item.citations,function(j,newItem){
      x+='<p>'+newItem+'</p>'
    });
  });
  x += '</div>';
  $('#byFaculty').append(x);
});

//resources
myXhr('get',{path:'/research/'},'#r-faculty').done(function(json){
  //do something
  var x='<h1>Faculty</h1><div class="mediaboxAA">';
  $.each(json.byFaculty,function(i,item){
    x+='<hr><h2>'+item.facultyName+'</h2>';
    $.each(item.citations,function(j,newItem){
      x+='<p>'+newItem+'</p>'
    });
  });
  x += '</div>';
  $('#byFaculty').append(x);
});

//resources
myXhr('get',{path:'/resources/studyAbroad'},'#studyAbroad').done(function(json){
  var x = '';
  var item = json.studyAbroad;
  //console.log(json.studyAbroad);
    x += '<h3>'+item.title+"</h3><p>"+item.description+'</p>';
    $.each(item.places,function(j,newItem){
        x += '<p>'+newItem.nameOfPlace+'</p><p>'+newItem.description+'</p>';
    });//end of first each
  $('#resources').html(x);
});

//footer

//contact


//<div onclick="getMoreFac(this)" data-userID="dsbics">
//$.each(json,function(i,item){
// x += <div onclick="getMoreFac(this)" data-userID="dsbics">;
//
//});

//use myXhr
myXhr('get',{path:'/people/'},'#people').done(function(json){
  //do something
  var x='';
  $.each(json.faculty,function(i,item){
    //item === this NOT $(this) this
    x+='<div class="mediabox people"><h2 class="rCenter">'+item.name+'</h2>'+'</p><img class="rCenter" src="'+item.imagePath+'"/></div>';
  });
  $('#section-5').html(x);
});

});
myXhr('get',{path:'/people/'},'#people').done(function(json){
  // do something...
  var x='';
  $.each(json.faculty,function(i, item){
    //item === this
    x+='<div onclick="getFac(this)" data-username="'+item.username+'"><h2>'+item.name+'</h2><p>'+item.tagline+'</p><img src="'+item.imagePath+'"/></div>';
  });
  $('#people').html(x);
});

function getFac(dom){
  myXhr('get',{path:'/people/faculty/username='+$(dom).attr('data-username')},null).done(function(json){
    console.log(json);
  });
}
////////////////////////////////
//utility
// - data {path:'/about/'}
//(getORpost, data, idForSpinner)
function myXhr(t,d,id){
  return $.ajax({
    type:t,
    url:'proxy.php',
    dataType:'json',
    data:d,
    cache:false,
    async:true,
    beforeSend:function(){
      $(id).html('<img src="images/gears.gif" class="spin"/>');
    }
  }).always(function(){
    //kill spinner
    $(id).find('.spin').fadeOut(5000,function(){
      $(this).remove();
    });
  }).fail(function(){
    //handle failure
  });

}//end of function myXhr
