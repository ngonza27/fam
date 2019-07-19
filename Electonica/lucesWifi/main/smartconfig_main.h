#include <string.h>
#include <stdlib.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "freertos/event_groups.h"
#include "esp_wifi.h"
#include "esp_wpa2.h"
#include "esp_event_loop.h"
#include "esp_log.h"
#include "esp_system.h"
#include "nvs_flash.h"
#include "tcpip_adapter.h"
#include "esp_smartconfig.h"
#pragma once


static EventGroupHandle_t wifi_event_group;
static const int CONNECTED_BIT;
static const int ESPTOUCH_DONE_BIT;

static esp_err_t event_handler(void *ctx, system_event_t *event);
static void initialise_wifi(void);
static void sc_callback(smartconfig_status_t status, void *pdata);
void smartconfig_example_task(void * parm);