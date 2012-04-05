<script src="js/form.js"></script>
<span id="closebt" class="close-work-detail" styles="display:block;margin:100px;color:#000;"><a href="#">X</a></span>
<div class="section" id="contact">
	<div class="section-wrapper">
    	<p class="breadcrumbs">Contact // Folio Two · Folio Series</p>
        <h2 class="claim">Info &amp; Contact</h2>
        <ul>
        	<li>Venezia, Italia</li>
            <li>Donzella Strada, Nº 22</li>
            <li class="list-section">D - 556356</li>
            <li>(+44) 555 76 99 03 - <small>telf</small></li>
            <li class="list-section">(+44) 555 76 99 04 - <small>fax</small></li>
            <li>hello(at)folioseries.com</li>
            <li class="list-section">folioseries.foliotwo - <small>skype</small></li>
            <li><a href="http://maps.google.es/maps?q=Par%C3%ADs,+cathedrale+notre+dame,+Francia&hl=es&ie=UTF8&ll=48.852994,2.349342&spn=0.002125,0.006861&sll=48.852344,2.353719&sspn=0.002125,0.004817&vpsrc=6&hnear=Cath%C3%A9drale+Notre-Dame,+75004+Par%C3%ADs,+%C3%8Ele-de-France,+Francia&t=k&z=18&output=embed iframe=true&width=80%&height=80%" data-gal="prettyPhoto[iframe]" title="view map">view map &rarr;</a></li>
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