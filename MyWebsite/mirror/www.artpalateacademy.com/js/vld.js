var sitename="http://"+window.location.hostname+"/thanks.php";

function cus_trim(strvar){
    return strvar.replace(/^\s+|\s+$/g, ''); 
}
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function vacate(prodFormId, prodFormErrDiv){ // For every individual product form ****
    document.getElementById(prodFormErrDiv).style.display = "none";
    document.getElementById(prodFormErrDiv).innerHTML = "";
    $("#"+prodFormId).show();
}

function setProdID(prod_id){
	//var callbk_prod = document.getElementById('prodidcallbk');	
//	if(callbk_prod !== null){
//		document.getElementById('prodidcallbk').value = prod_id;
//	}
        var sms_prod = document.getElementById('prodidsms');	
	if(sms_prod !== null){
            document.getElementById('prodidsms').value = prod_id;
	}
	
        var hl_prod = document.getElementById('prodidhl');
        if(hl_prod !== null){
            document.getElementById('prodidhl').value = prod_id;
        }
        
        var mail_prod = document.getElementById('prodidmail');
        if(mail_prod !== null){
            document.getElementById('prodidmail').value = prod_id;
        }
        
	$("#btnsms_"+prod_id).click(function(){
        document.getElementById("frmNameSms").value = ''; 
        document.getElementById("frmNumSms").value = ''; 
        document.getElementById("frmMsgSms").value = '';							
        document.getElementById("msg_validate_sms").style.display = "none";
        document.getElementById("msg_validate_sms").innerHTML = "";
        $("#frmSms").show();            
  });
  
  $("#callbk_"+prod_id).click(function(){                        							
    document.getElementById("frmNameCallbk").value = ''; 
    document.getElementById("frmNumCallbk").value = ''; 	    				
    document.getElementById("msg_validate_callbk").style.display = "none";
    document.getElementById("msg_validate_callbk").innerHTML = "";       
//   	document.getElementById("frmCallbk").style.display = "block"; 
   	$("#frmCallbk").show();
  });  
  
  $("#btn_hl_"+prod_id).click(function(){
   	document.getElementById("frmNameHl").value = ''; 
   	document.getElementById("frmEmailHl").value = '';
   	document.getElementById("frmNumHl").value = ''; 
   	document.getElementById("frmMsgHl").value = '';   	
   	document.getElementById("msg_validate_hl").style.display = "none";
   	document.getElementById("msg_validate_hl").innerHTML = "";
   	$("#frmHl").show();
  });
  
  $("#btnmail_"+prod_id).click(function(){
   	document.getElementById("frmNameMail").value = ''; 
   	document.getElementById("frmEmailMail").value = '';
   	document.getElementById("frmNumMail").value = ''; 
   	document.getElementById("frmMsgMail").value = '';   	
   	document.getElementById("msg_validate_hl").style.display = "none";
   	document.getElementById("msg_validate_hl").innerHTML = "";
   	$("#frmMail").show();
  });
  
}

	$("#btnsms").click(function(){
		document.getElementById("frmNameSms").value = ''; 
		document.getElementById("frmNumSms").value = ''; 
		document.getElementById("frmMsgSms").value = '';
		document.getElementById('prodidsms').value = '';							
		document.getElementById("msg_validate_sms").style.display = "none";
		document.getElementById("msg_validate_sms").innerHTML = "";
		$("#frmSms").show();            
    });
     $("#btnmail").click(function(){
		document.getElementById("frmNameMail").value = ''; 
		document.getElementById("frmEmailMail").value = ''; 
		document.getElementById("frmMsgMail").value = '';
		document.getElementById('prodidmail').value = '';							
		document.getElementById("msg_validate_mail").style.display = "none";
		document.getElementById("msg_validate_mail").innerHTML = "";
		$("#frmMail").show();            
    });
    $("#callbk1,#callbk2,#callbk3").click(function(){                        							
        document.getElementById("frmNameCallbk").value = ''; 
        document.getElementById("frmNumCallbk").value = ''; 	
        document.getElementById('prodidcallbk').value = '';						
        document.getElementById("msg_validate_callbk").style.display = "none";
        document.getElementById("msg_validate_callbk").innerHTML = "";
       
         document.getElementById("frmCallbk").style.display = "block"; $("#frmCallbk").show();
    });
                       
    $("#btncmn,#btn_form_hl").click(function(){
       document.getElementById("frmNameCmn").value = ''; 
       document.getElementById("frmEmailCmn").value = '';
       document.getElementById("frmNumCmn").value = ''; 
       document.getElementById("frmMsgCmn").value = '';
       document.getElementById('prodid').value = '';
       document.getElementById("msg_validate_cmn").style.display = "none";
       document.getElementById("msg_validate_cmn").innerHTML = "";
       $("#frmCmn").show();
    });
    $("#sidebar").click(function(){
       
       if(document.getElementById("msg_validate_side").style.display == "block")
       {
            setTimeout(function(){
            document.getElementById("msg_validate_side").style.display = "none";
            document.getElementById("msg_validate_side").innerHTML = "";
            document.getElementById("frmNameSide").value = ''; 
       document.getElementById("frmEmailSide").value = '';
       document.getElementById("frmNumSide").value = ''; 
       document.getElementById("frmMsgSide").value = '';
         }, 1900);
        
        }        
            //$("#frmSide").show();
    });        

// Check format of email ***
function echeck(str) {

    var at="@"
    var dot="."
    var lat=str.indexOf(at)
    var lstr=str.length
    var ldot=str.indexOf(dot)
    if (str.indexOf(at)==-1){     
        return false
    }
    if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){      
        return false
    }
    if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
        return false
    }
    if (str.indexOf(at,(lat+1))!=-1){     
        return false
    }
    if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
        return false
    }
    if (str.indexOf(dot,(lat+2))==-1){    
        return false
    }   
    if (str.indexOf(" ")!=-1){
        return false
    }
    return true                   
}

function validateSms(errDiv){	
    var msg=new Array();
    var valid=1;
	document.getElementById("msg_validate_sms").innerHTML = '';
    var name = document.getElementById("frmNameSms").value;
	name = cus_trim(name);
	var mobile = document.getElementById("frmNumSms").value;
	mobile = cus_trim(mobile);
	var msg_body = document.getElementById("frmMsgSms").value;
	msg_body = cus_trim(msg_body);
	
    if(name == "" || name == "Name"){
            msg[msg.length]="Please enter full name.";
    valid=0;
    }	
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }
	if(msg_body == "" || msg_body == "Message"){
		msg[msg.length]="Please enter your Message.";
		valid=0;
	}
	
	if(valid == 0)
	{		
		message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
  else{            
            $.ajax({
                type: "POST",
                url: "get_result.php",//"http://www.indiabizsource.com/client/doctor-diet/get_result.php",
                data: $("#frmSms").serialize(), // serializes the form's elements.
                success: function(msg)
                {                                        
                    var successMsg = document.getElementById("msg_validate_sms");
                     
                    if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                    {   						
		        window.location.href=sitename;
                    }					
                    else			
                    {
			result=msg;
                        successMsg.style.display = "block";                        
                        successMsg.style.textAlign = "center";
			successMsg.innerHTML = result;
                        document.getElementById("frmNameSms").value = ''; 
                        document.getElementById("frmNumSms").value = ''; 
                        document.getElementById("frmMsgSms").value = '';
			msg="";
                    }

                }
            });
            return false; // avoid to execute the actual submit of the form.
        }
 
}

function validateCallbk(errDiv){
	
    var msg=new Array();
    var valid=1;   
	
    var name = document.getElementById("frmNameCallbk").value;
	name = cus_trim(name); 
	var mobile = document.getElementById("frmNumCallbk").value;
	mobile = cus_trim(mobile);	
	
	if(name="" || name == "name"){
            msg[msg.length]="Please enter full name.";
            valid=0;
	}	
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "Mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }	
	
    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
    //     window.location="contact-us.php#msg_validate";
    //     return false;
    }
    else{            
            $.ajax({
                type: "POST",
                url: "get_result.php",//"http://www.indiabizsource.com/client/doctor-diet/get_result.php",
                data: $("#frmCallbk").serialize(), // serializes the form's elements.
                success: function(msg)
                {                                        
                    var successMsg = document.getElementById(errDiv);
                     
                    if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                    {                       
 			window.location.href=sitename;
                    }
//                    else if(msg == 'reset'){
//                        alert(msg);
//                            successMsg.style.display = "none";
//                            successMsg.innerHTML = "";
//                            $("#frmSms").show();   
//                    }
                    else			
                    {
			result=msg;
                        successMsg.style.display = "block";                        
                        successMsg.style.textAlign = "center";
			successMsg.innerHTML = result;
                        document.getElementById("frmNameCallbk").value = ''; 
                        document.getElementById("frmNumCallbk").value = '';                         
                    }
		    //$("#note").show(); 
                    //$("#note").append(result);		 
                }
            });
            return false; // avoid to execute the actual submit of the form.
            //return true;
        }
}

function validateCmn(errDiv){ 
    var msg=new Array();
    var valid=1;   //alert('sssssssss');
    
    var name = document.getElementById("frmNameCmn").value;
	name = cus_trim(name);
    var email = document.getElementById("frmEmailCmn").value;
	email = cus_trim(email);
    var mobile = document.getElementById("frmNumCmn").value;
	mobile = cus_trim(mobile);
    var msg_body = document.getElementById("frmMsgCmn").value;
	msg_body = cus_trim(msg_body); 
    if(name == "name" || name== ""){
        msg[msg.length]="Please enter full name.";
        valid=0;
    }
    if(email == "" || email == 'Email'){
            msg[msg.length]="Please enter Email";
    valid=0;
    }	
    else if(!echeck(email)){
        msg[msg.length]="Please enter valid Email.";
        valid=0;
//       alert("Please enter your valid Email.")
    }
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "Mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }        
	
    if(msg_body == "" || msg_body == "Message")
    {
        msg[msg.length]="Please enter your Message.";
        valid=0;
    }

    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
    else{            
            $.ajax({
                type: "POST",
                url: "get_result.php",//"http://www.indiabizsource.com/client/doctor-diet/get_result.php",
                data: $("#frmCmn").serialize(), // serializes the form's elements.
                success: function(msg)
                {                                        
                    var successMsg = document.getElementById(errDiv);
                   //  alert(errDiv);
                    if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                    {                       
                     window.location.href=sitename;
                    }
//                    else if(msg == 'reset'){
//                        alert(msg);
//                            successMsg.style.display = "none";
//                            successMsg.innerHTML = "";
//                            $("#frmSms").show();   
//                    }
                    else			
                    {
			result=msg;
                        successMsg.style.display = "block";                        
                        successMsg.style.textAlign = "center";
			successMsg.innerHTML = result;
                        document.getElementById("frmNameCmn").value = ''; 
                        document.getElementById("frmEmailCmn").value = '';
                        document.getElementById("frmNumCmn").value = ''; 
                        document.getElementById("frmMsgCmn").value = '';
                    }		    		 
                }
            });
            return false; // avoid to execute the actual submit of the form.
            //return true;
        }
}

function validateMail(errDiv){ 
    var msg=new Array();
    var valid=1;   //alert('sssssssss');
    
    var name = document.getElementById("frmNameMail").value;
	name = cus_trim(name);
    var email = document.getElementById("frmEmailMail").value;
	email = cus_trim(email);    
    var msg_body = document.getElementById("frmMsgMail").value;
	msg_body = cus_trim(msg_body); 
    if(name == "name" || name== ""){
        msg[msg.length]="Please enter full name.";
        valid=0;
    }
    if(email == "" || email == 'Email'){
            msg[msg.length]="Please enter Email";
    valid=0;
    }	
    else if(!echeck(email)){
        msg[msg.length]="Please enter valid Email.";
        valid=0;
//       alert("Please enter your valid Email.")
    }
           
    if(msg_body == "" || msg_body == "Message")
    {
        msg[msg.length]="Please enter your Message.";
        valid=0;
    }

    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
    else{            
            $.ajax({
                type: "POST",
                url: "get_result.php",//"http://www.indiabizsource.com/client/doctor-diet/get_result.php",
                data: $("#frmMail").serialize(), // serializes the form's elements.
                success: function(msg)
                {                      
                var successMsg = document.getElementById(errDiv);
               //  alert(errDiv);
                if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                {                       
                  window.location.href=sitename; 
                }

                else			
                {
                    result=msg;
                    successMsg.style.display = "block";                        
                    successMsg.style.textAlign = "center";
                    successMsg.innerHTML = result;
                    document.getElementById("frmNameMail").value = ''; 
                    document.getElementById("frmEmailMail").value = '';                    
                    document.getElementById("frmMsgMail").value = '';
                }	    		 
            }
        });
            return false; // avoid to execute the actual submit of the form.
            //return true;
    }
}

function validateHl(errDiv){ 
    var msg=new Array();
    var valid=1;   //alert('sssssssss');
    
    var name = document.getElementById("frmNameHl").value;
	name = cus_trim(name);
    var email = document.getElementById("frmEmailHl").value;
	email = cus_trim(email);
    var mobile = document.getElementById("frmNumHl").value;
	mobile = cus_trim(mobile);
    var msg_body = document.getElementById("frmMsgHl").value;
	msg_body = cus_trim(msg_body); 
        
    if(name == "name" || name== ""){
        msg[msg.length]="Please enter full name.";
        valid=0;
    }
    if(email == "" || email == 'Email'){
            msg[msg.length]="Please enter Email";
    valid=0;
    }	
    else if(!echeck(email)){
        msg[msg.length]="Please enter valid Email.";
        valid=0;
//       alert("Please enter your valid Email.")
    }
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "Mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }        
	
    if(msg_body == "" || msg_body == "Message")
    {
        msg[msg.length]="Please enter your Message.";
        valid=0;
    }

    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
    else{            
            $.ajax({
                type: "POST",
                url: "get_result.php",
                data: $("#frmHl").serialize(), // serializes the form's elements.
                success: function(msg)
                {                                        
                    var successMsg = document.getElementById(errDiv);
                     //alert("==>>"+msg);
                    if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                    {                       
                       window.location.href=sitename; 
                    }
                    else			
                    {
			result=msg;
                        successMsg.style.display = "block";                        
                        successMsg.style.textAlign = "center";
			successMsg.innerHTML = result;
                        document.getElementById("frmNameHl").value = ''; 
                        document.getElementById("frmEmailHl").value = '';
                        document.getElementById("frmNumHl").value = ''; 
                        document.getElementById("frmMsgHl").value = '';
                    }
                }
            });
            return false; // avoid to execute the actual submit of the form.
            //return true;
        }
}

function validateSide(errDiv){
    var msg=new Array();
    var valid=1;   

    var name = document.getElementById("frmNameSide").value;
		name = cus_trim(name);
    var email = document.getElementById("frmEmailSide").value;
		email = cus_trim(email);
    var mobile = document.getElementById("frmNumSide").value;
		mobile = cus_trim(mobile);
    var msg_body = document.getElementById("frmMsgSide").value;
		msg_body = cus_trim(msg_body); 
    if(name == "name" || name== ""){
        msg[msg.length]="Please enter full name.";
        valid=0;
    }
    if(email == "" || email == 'Email'){
            msg[msg.length]="Please enter Email";
    valid=0;
    }	
    else if(!echeck(email)){
        msg[msg.length]="Please enter valid Email.";
        valid=0;
//       alert("Please enter your valid Email.")
    }
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "Mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }        
	
    if(msg_body == "" || msg_body == "Message")
    {
        msg[msg.length]="Please enter your Message.";
        valid=0;
    }

    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
    else{            
            $.ajax({
                type: "POST",
                url: "get_result.php",//"http://www.indiabizsource.com/client/doctor-diet/get_result.php",
                data: $("#frmSide").serialize(), // serializes the form's elements.
                success: function(msg)
                {                                        
                    var successMsg = document.getElementById(errDiv);
                     
                    if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                    {                       
                      window.location.href=sitename;
                    }
//                    else if(msg == 'reset'){
//                        alert(msg);
//                            successMsg.style.display = "none";
//                            successMsg.innerHTML = "";
//                            $("#frmSms").show();   
//                    }
                    else			
                    {
			result=msg;
                        successMsg.style.display = "block";                    
                        successMsg.style.textAlign = "center";
			successMsg.innerHTML = result;
                        document.getElementById("frmNameSide").value = ''; 
                        document.getElementById("frmEmailSide").value = '';
                        document.getElementById("frmNumSide").value = ''; 
                        document.getElementById("frmMsgSide").value = '';
                    }		    		 
                }
            });
            return false; // avoid to execute the actual submit of the form.
            //return true;
        }
}

function validateLft(errDiv){
    var msg=new Array();
    var valid=1;   

    var name = document.getElementById("frmNameLft").value;
	name = cus_trim(name);
    var email = document.getElementById("frmEmailLft").value;
	email = cus_trim(email);
    var mobile = document.getElementById("frmNumLft").value;
	mobile = cus_trim(mobile);
    var msg_body = document.getElementById("frmMsgLft").value;
	msg_body = cus_trim(msg_body); 
    if(name == "name" || name == ""){
        msg[msg.length]="Please enter full name.";
        valid=0;
    }
    if(email == "" || email == 'Email'){
            msg[msg.length]="Please enter Email";
    valid=0;
    }	
    else if(!echeck(email)){
        msg[msg.length]="Please enter valid Email.";
        valid=0;
//       alert("Please enter your valid Email.")
    }
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "Mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }        
	
    if(msg_body == "" || msg_body == "Message")
    {
        msg[msg.length]="Please enter your Message.";
        valid=0;
    }

    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
    else{
        return true;
    }
}


function validateCust(errDiv){ 

    var msg=new Array();
    var valid=1;   //alert('sssssssss');
    
    
    var name = document.getElementById("frmNameCust").value;
	name = cus_trim(name);    
    var email = document.getElementById("frmEmailCust").value;
	email = cus_trim(email);
    var mobile = document.getElementById("frmNumCust").value;
	mobile = cus_trim(mobile);    
    var msg_body = document.getElementById("frmMsgCust").value;
        msg_body = cus_trim(msg_body);	
    if(name == "name" || name== ""){
        msg[msg.length]="Please enter full name.";
        valid=0;
    }
    if(email == "" || email == 'Email'){
            msg[msg.length]="Please enter Email";
    valid=0;
    }	
    else if(!echeck(email)){
        msg[msg.length]="Please enter valid Email.";
        valid=0;
//       alert("Please enter your valid Email.")
    }
    mobilepattern = /^[0-9 \-]{10,13}$/;
    if(mobile == "Mobile number"){         
        msg[msg.length]="Please enter mobile no.";
        valid=0;
    }
    else if(!mobilepattern.test(mobile)){
        msg[msg.length]="Please enter valid mobile no.";   
        valid=0;   
    }        
	
    if(msg_body == "" || msg_body == "Message")
    {
        msg[msg.length]="Please enter your Message.";
        valid=0;
    }

    if(valid == 0)
    {		
        message_box="<ul>";
        for(i=0;i<msg.length;i++)
        {
            message_box+="<li>";
            message_box+=msg[i];
            message_box+="</li>";
        }
        message_box+="</ul>";
        document.getElementById(errDiv).style.display="block";
        document.getElementById(errDiv).innerHTML=message_box;		
        return false;
//     window.location="contact-us.php#msg_validate";
//     return false;
    }
    else{            
            $.ajax({
                type: "POST",
                url: '/php',
                data: $("#frmCust").serialize(), // serializes the form's elements.
                success: function(msg)
                {                                        
                    var successMsg = document.getElementById(errDiv);
                    if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
                    {      
								window.location.href=sitename;


                    }
                    else			
                    {
			result=msg;
                        successMsg.style.display = "block";                        
                        successMsg.style.textAlign = "center";
			successMsg.innerHTML = result;
                        document.getElementById("frmNameCust").value = ''; 
                        document.getElementById("frmEmailCust").value = '';
                        document.getElementById("frmNumCust").value = ''; 
                        document.getElementById("comment").value = '';
                    }		    		 
                }
            });
            return false; 
        }
}


