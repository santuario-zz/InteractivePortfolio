<?php

if (preg_match("/shot\.php$/", $_SERVER['PHP_SELF'])){
	exit('No direct script access allowed');
}

/**
 * Dribbble shot API class
 *
 * @author Martin Bean <martin@mcbwebdesign.co.uk>
 **/
class Shot extends Base
{
    public $id;                // integer
    public $title;             // string
    public $url;               // string
    public $image_url;         // string
    public $image_teaser_url;  // string
    public $width;             // integer
    public $height;            // integer
    public $views_count;       // integer
    public $likes_count;       // integer
    public $comments_count;    // integer
    public $rebounds_count;    // integer
    public $created_at;        // string
    public $player;            // object
    
    //Comments on a shot
    public $comments;		   	//object
    public $shots;		   		//object
    	public $rebounds;			//Alias for shots
    
    function __construct(){
    	$rebounds =& $shots; // Alias "shots" to mean "rebounds". Intuitive naming
	}
	
    /**
     * undocumented function
     *
     * @return void
     * @author Martin Bean <martin@digitalpop.co.uk>
     **/
    function find($id)
    {
        return $this->get('/shots/'.$id);
    }
    
    /**
     * Fetches shots of debutants
     *
     * @param array $options
     * @return string
     **/
    public function debuts($options=array())
    {
        return $this->paginated_list($this->get('/shots/debuts', $options));
    }
    
    /**
     * Fetches shots from everyone
     *
     * @param array $options
     * @return string
     **/
    public function everyone($options=array())
    {
        return $this->paginated_list($this->get('/shots/everyone', $options));
    }
    
    /**
     * Fetches popular shots
     *
     * @param array $options
     * @return string
     **/
    public function popular($options=array())
    {
        return $this->paginated_list($this->get('/shots/popular', $options));
    }
    
    /**
     * Fetches comments for a particular shot
     *
     * @param array $options
     * @return string
     **/
    public function comments($options=array())
    {
    	//This will automatically use the current shot ID
    	if (!empty($this->id)){
    		
    		$this->paginated_list($this->get('/shots/'.$this->id.'/comments', $options));
    	
    		if ($this->total > 0) :
    			return $this->comments;
    		else :
    			//There are no comments for this shot
    			return false;
    		endif;
    		
    	}else{
    		//No ID has been set yet
    		return false;		
    	}
    	
    }
    
     /**
     * Fetches rebounds for a particular shot
     *
     * @param array $options
     * @return string
     **/
    public function rebounds($options=array())
    {
    	//This will automatically use the current shot ID
    	if (!empty($this->id)){
    		
    		$this->paginated_list($this->get('/shots/'.$this->id.'/rebounds', $options));
    	
    		if ($this->total > 0) :
    			return $this->shots; //Renamed to "rebounds" in usage
    		else :
    			//There are no rebounds for this shot
    			return false;
    		endif;
    		
    	}else{
    		//No ID has been set yet
    		return false;	
    	}	
    }
    
}