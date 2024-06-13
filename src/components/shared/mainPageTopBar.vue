<template>
  <div>
    <v-container fluid id="vertmenu-sec">
      <v-row>
        <v-col cols="sm" class="vert-menu">
          <div class="humberger">
            <div
              class="barss"
              @click="animate=!animate"
              v-bind:class="{ 'animate_bars' : animate }"
            >
              <div class="barss1">
                <hr />
              </div>
              <div class="barss2">
                <hr />
              </div>
              <div class="barss3">
                <hr />
              </div>
            </div>
            <!--            verticle menu START           -->
            <div class="tab3">
              <div
                data-child="false"
                class="tab__header left-side"
                v-bind:style="animate ? 'display:block' : '' "
              >
                <div
                  class="tab__header-1 tab__header--active"
                  @click="currentTabHeader"
                >Dtabase Administration</div>
                <div class="tab__header-2" @click="currentTabHeader">Cloude</div>
                <div class="tab__header-3" @click="currentTabHeader">Migration</div>
                <div class="tab__header-4" @click="currentTabHeader">Directors info</div>
                <div class="tab__header-5" @click="currentTabHeader">Nature & Mode Of Work</div>
                <div
                  class="tab__header-6"
                  @click="currentTabHeader"
                >Hardwar and Networking Component</div>
                <div class="tab__header-7" @click="currentTabHeader">Staffing</div>
                <div class="tab__header-8" @click="currentTabHeader">Corporate Training on Oracle</div>
                <div class="tab__header-9" @click="currentTabHeader">Corporate Training on Redhat</div>
              </div>
              <div class="tab__content">
                <!--         tab 1              -->
                <div class="tab__content-1 tab__content--active">
                  <div class="tab">
                    <!-- Middle Side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >E-Business suit</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Single Sign in</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Golden Gate</div>
                      <div class="tab__header-4" @click="currentInnerTabHeader">Open Source</div>
                    </div>
                    <!-- Right Side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-4">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--      Tab 2    -->
                <div class="tab__content-2">
                  <div class="tab">
                    <!-- Middle Side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 2 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 2 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 2 3</div>
                      <div class="tab__header-4" @click="currentInnerTabHeader">Sub Tab 2 4</div>
                    </div>
                    <!-- Right Side    -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-4">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tab 3 -->
                <div class="tab__content-3">
                  <div class="tab">
                    <!-- Middle Side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 3 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 3 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 3 3</div>
                    </div>
                    <!-- Right Side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tab 4 -->
                <div class="tab__content-4">
                  <div class="tab">
                    <!-- Middle Side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 4 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 4 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 4 3</div>
                    </div>
                    <!-- Right side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tab 5  -->
                <div class="tab__content-5">
                  <div class="tab">
                    <!-- Middle Side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 5 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 5 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 5 3</div>
                    </div>
                    <!-- right side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tab 6 -->
                <div class="tab__content-6">
                  <div class="tab">
                    <!-- Middle side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 6 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 6 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 6 3</div>
                    </div>
                    <!-- Right side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  tab 7  -->
                <div class="tab__content-7">
                  <div class="tab">
                    <!-- middle side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 7 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 7 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 7 3</div>
                    </div>
                    <!-- right side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tab 8 -->
                <div class="tab__content-8">
                  <div class="tab">
                    <!-- middle side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 8 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 8 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 8 3</div>
                    </div>
                    <!-- right side -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  tab 9   -->
                <div class="tab__content-9">
                  <div class="tab">
                    <!-- middle side -->
                    <div
                      data-child="true"
                      class="tab__header middle-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div
                        class="tab__header-1 tab__header--active"
                        @click="currentInnerTabHeader"
                      >Sub Tab 9 1</div>
                      <div class="tab__header-2" @click="currentInnerTabHeader">Sub Tab 9 2</div>
                      <div class="tab__header-3" @click="currentInnerTabHeader">Sub Tab 9 3</div>
                    </div>
                    <!-- right side  -->
                    <div
                      class="tab__content right-side"
                      v-bind:style="animate ? 'display:block' : '' "
                    >
                      <div class="tab__content-1 tab__content--active">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-2">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                      <div class="tab__content-3">
                        <div class="rs-left">
                          <h1>NETWORKING</h1>
                          <ul>
                            <li>
                              <a href>Network Architecture - Cisco DNA</a>
                            </li>
                            <li>
                              <a href>SD-Access</a>
                            </li>
                            <li>
                              <a href>SD-WAN</a>
                            </li>
                            <li>
                              <a href>Switches</a>
                            </li>
                            <li>
                              <a href>Wireless</a>
                            </li>
                            <li>
                              <a href>Routers</a>
                            </li>
                            <li>
                              <a href>Enterprise Network Security</a>
                            </li>
                          </ul>
                          <h1>I NEED TO...</h1>
                          <ul>
                            <li>
                              <a href>Automate wired and wireless network policy</a>
                            </li>
                            <li>
                              <a href>Simplify branch and WAN network operations</a>
                            </li>
                            <li>
                              <a href>Address malware and cyberthreats</a>
                            </li>
                            <li>
                              <a href>Assure network availability and performance</a>
                            </li>
                          </ul>
                        </div>
                        <div class="rs-right">
                          <h1>TOP PRODUCTS</h1>
                          <ul>
                            <li>
                              <a href>Catalyst 9200 Series Switches</a>
                            </li>
                            <li>
                              <a href>Catalyst 9800 Series Wireless Controllers</a>
                            </li>
                            <li>
                              <a href>4000 Series Integrated Services Routers</a>
                            </li>
                            <li>
                              <a href>Cisco DNA Center</a>
                            </li>
                            <li>
                              <a href>Nexus 9000 Series Switches</a>
                            </li>
                          </ul>
                          <div class="rs-right-box">
                            <h1>INTENT-BASED NETWORKING</h1>
                            <p>Simplify the way you manage, secure, and scale your network.</p>
                            <a href style="color:cornflowerblue;">Learn How ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--            verticle menu END           -->
          </div>
        </v-col>
        <v-col cols="6" class="vert-search">
          <v-form>
            <v-text-field
              label="What are you looking for?"
              outlined
              rounded
              filled
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="sm">
          <div class="logo-div">
            <a href>
              <img src="assets/images/logo.png" alt />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    animate: false,
    targetDigit: "1",
    prevDigit: "1"
  }),
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop = window.top.scrollY;
      if (this.windowTop >= 500) {
        this.animate = false;
      }
    },
    currentTabHeader(tab) {
      let clicked = tab.target.classList[0].split("-")[1];

      if (this.targetDigit !== clicked) {
        this.targetDigit = clicked;
      }

      let children = tab.target.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        let tabHeader = this.$el.querySelector("." + children[i].classList[0]);
        if (tabHeader.classList.contains("tab__header--active")) {
          tabHeader.classList.remove("tab__header--active");
          this.prevDigit = tabHeader.classList[0].split("-")[1];
        }
      }
      tab.target.classList.add("tab__header--active");

      let tabContentPrev =
        tab.target.parentElement.nextElementSibling.children[
          parseInt(this.prevDigit) - 1
        ].classList;
      tabContentPrev.remove("tab__content--active");

      let tabContent =
        tab.target.parentElement.nextElementSibling.children[
          parseInt(this.targetDigit) - 1
        ].classList;
      tabContent.add("tab__content--active");
    },
    currentInnerTabHeader(tab) {
      let clicked = tab.target.classList[0].split("-")[1];
      let children = tab.target.parentElement.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains("tab__header--active")) {
          this.$el
            .querySelector(
              "div.tab__content-" +
                this.targetDigit +
                ".tab__content--active div.tab div.tab__header.middle-side div." +
                children[i].classList[0]
            )
            .classList.remove("tab__header--active");
        }
      }
      tab.target.classList.add("tab__header--active");

      let rightSideChildren = tab.target.parentElement.nextSibling.children;

      for (let i = 0; i < rightSideChildren.length; i++) {
        if (rightSideChildren[i].classList.contains("tab__content--active")) {
          this.$el
            .querySelector(
              "div.tab__content-" +
                this.targetDigit +
                ".tab__content--active div.tab div.tab__content.right-side div." +
                rightSideChildren[i].classList[0]
            )
            .classList.remove("tab__content--active");
        }
      }
      this.$el
        .querySelector(
          "div.tab__content-" +
            this.targetDigit +
            ".tab__content--active div.tab div.tab__content.right-side div.tab__content-" +
            clicked
        )
        .classList.add("tab__content--active");
    }
  }
};
</script>