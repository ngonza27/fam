#include "smartconfig_main.h"
#include "smartconfig_main.c"

#include "driver/gpio.h"

#include "awsIot.h"
#include "awsIot.c"

#define GPIO_OUTPUT_IO_0    18
#define GPIO_OUTPUT_PIN_SEL  (1ULL<<GPIO_OUTPUT_IO_0 )
#define ESP_INTR_FLAG_DEFAULT 0

char action[50];
// esta funcion recibe un mensaje en formato json y retorna la accion correspondiente
char *jsonParse(char *msg){;
    int actionStart=0;
    int actionEnd=0;
    //como lista esta llena de ceros se pone el \0 para que cuando se imprima solo lea el primer index
    action[0]='\0';
    msg[0]='\0';
    ESP_LOGE(TAG,"Accion: %s",action);
    ESP_LOGE(TAG,"Mensaje: %s",msg);
    //se recorre la el mensaje de entrada buscando los caracteres : y } y guarda su posicion en actionStart y 
    //action end
    for(int i=0; i<50;i++){
        if (msg[i]==':'){
            actionStart=i+2;
        }
        if (msg[i]=='}'){
            actionEnd=i-1;
        }

    }
    ESP_LOGE(TAG,"start: %i",actionStart);
    ESP_LOGE(TAG,"end: %i",actionEnd);
    int cont=0;
    //hace un substring en en el mensaje desde action start hasta actio end
    //y lo guarda en la lista action
    for (int i=actionStart;i<actionEnd;i++){
        
        action[cont]=msg[i];
        cont++;
    }
    action[(actionEnd-actionStart)+1]='\0';

    if(action[(actionEnd-actionStart)-1]=='\"'){
        action[(actionEnd-actionStart)]='\0';
    }

    return action;

}

void app_main(){
    esp_err_t err = nvs_flash_init();
    ESP_ERROR_CHECK( nvs_flash_init() );
    if (err == ESP_ERR_NVS_NO_FREE_PAGES || err == ESP_ERR_NVS_NEW_VERSION_FOUND) {
        ESP_ERROR_CHECK(nvs_flash_erase());
        err = nvs_flash_init();
    }
    ESP_ERROR_CHECK( err );

    //llama a la funcion de arriba initialise_wifi
    initialise_wifi();
    xTaskCreatePinnedToCore(&aws_iot_task, "aws_iot_task", 9216, NULL, 5, NULL, 1);


     gpio_config_t io_conf;
    io_conf.intr_type= GPIO_PIN_INTR_DISABLE;
    io_conf.mode=GPIO_MODE_DEF_OUTPUT;
    io_conf.pin_bit_mask=GPIO_OUTPUT_PIN_SEL;
    io_conf.pull_down_en=0;
    io_conf.pull_up_en=0;
    gpio_config(&io_conf);

}