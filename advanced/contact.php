<script src="js/form.js"></script>
<span id="closebt" class="close-work-detail" styles="display:block;margin:100px;color:#000;"><a href="#">X</a></span>
<div class="section" id="contact">
	<div class="section-wrapper">
    	<p class="breadcrumbs">CONTACT // ADRIAN SANTUARIO · ( SCIENT + ART ) IST</p>
        <h2 class="claim">Info &amp; Contact</h2>
        <ul>
        	<li>Mexico City, Mexico</li>
            <li></li>
            <li class="list-section"></li>
            <li>(+55) 56 46 24 16 - <small>tel</small></li>
            <li class="list-section">(+55) 13 41 15 72 - <small>cel</small></li>
            <li>contacto[at]adriansantuario.com</li>
            <li class="list-section">adrian.santuario - <small>skype</small></li>
            <li><a href="http://maps.google.es/maps/place?ftid=0x85ce0036b1352927:0xdefd9e4ee8d18a5b&q=Distrito+Federal&hl=es&ved=0CBQQ3g0&sa=X&ei=B8J3T-bcEJHcNtSL1PcP" data-gal="prettyPhoto[iframe]" title="view map">view map &rarr;</a></li>
        </ul>
		<div class="contact-form"> 
                          		                                 
                              <form method="POST" id="ajax_form" action="email.php"> 
                                <div id="form-wrapper"> 
                                    <div class="form-item" id="field-name"> 
                                        <label for="name" id="name_label">name:<span class="field-required" title="Required Field">*</span></label> 
                                        <input type="text" maxlength="90" name="name" id="name" placeholder="name" size="30" class="form-field required text_input clear" /> 
                                    </div> 
                                    <div class="form-item" id="field-mail"> 
                                        <label for="email" id="email_label">e-mail:<span class="field-required" title="Required Field">*</span></label> 
                                        <input type="email" maxlength="90" name="email" id="email" placeholder="e-mail" size="30" class="form-field required email text_input clear" />
                                    </div> 
                                    <div class="form-item" id="field-destino"> 
                                        <label for="formComments">Comments: </label> 
                                        <textarea cols="55" rows="" name="message" id="message" placeholder="comments"  class="form-textarea text_area clear" ></textarea>
                                    </div> 
                                    <input type="submit" name="submit" id="submit" value="send" class="submit form-submit" /> 
                                </div>  
                               </form>
                             </div>
    </div>
</div>

<script type="text/javascript" charset="utf-8">
  $(document).ready(function(){
    jQuery("a[data-gal^='prettyPhoto']").prettyPhoto();
  });
</script>