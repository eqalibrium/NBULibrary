<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function text_shortcode(){
    
    
        $args = array('orderby' => 'name', 'order' => 'ASC', 'fields' => 'all',"post_type"=> "post");
        $query = get_posts($args);
     foreach($query as $key => $val){
            foreach($val as $data => $value){
                if($data == 'ID'){
                    $term = wp_get_post_terms($value,'category');
                    
                    if($term[0]->name == 'Zala 1'){
                        echo "<div>Зала Едно";
                        $post_data = get_post($value);
                        
                        echo "<p>$post_data->post_title</p>";
                        echo "</div>";
                    }
                    
                    
                    if($term[0]->name == 'Zala 2'){
                        echo "<div>Зала Две";
                        $post_data = get_post($value);
                        echo "<p>$post_data->post_title</p>";
                        echo "</div>";
                    }
            }
            }
            
        }
}

add_shortcode("text_shortcode_short", 'text_shortcode');