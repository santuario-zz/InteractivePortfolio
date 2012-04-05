<?php

if (preg_match("/base\.php$/", $_SERVER['PHP_SELF'])){
	exit('No direct script access allowed');
}

/**
 * Dribbble base API class
 *
 * @author Martin Bean <martin@digitalpop.co.uk>
 **/
class Base
{
    /**
     * Dribbble API base URL
     *
     * @var string
     **/
    var $baseUrl = "http://api.dribbble.com/";
    
    /**
     * undocumented function
     *
     * @return void
     **/
    public function get($url, $options=array())
    {
        $url = $this->baseUrl . $url;
        if (!empty($options)) {
            $url.= "?" . http_build_query($options);
        }
        $result = json_decode(file_get_contents($url));
        foreach ($result as $key => $value) {
            $this->{$key} = $value;
        }
        return $this;
    }
    
    /**
     * undocumented function
     *
     * @param string $url
     * @param array  $options
     * @return string
     **/
    public function paginated_list($object)
    {
        return $object;
    }
}