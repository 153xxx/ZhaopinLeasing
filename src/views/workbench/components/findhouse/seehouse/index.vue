<template>
  <div style="background-color: rgb(25, 137, 250); height: 300px; padding: 20px">
    <Row :gutter="16">
      <Col :span="24">
        <Card :bordered="false" style="border-radius: 10px">
          <div>
            <div class="title">巡房</div>
            <div class="topselect">
              <div>
                <Select
                  class="select-popup"
                  defaultActiveFirstOption
                  v-model:value="selectRes"
                  @change="selectResChange"
                >
                  <SelectOption value="0">不限</SelectOption>
                  <SelectOption value="1">测试楼栋</SelectOption>
                  <SelectOption value="2">东西湖新创基地</SelectOption>
                </Select>
              </div>
              <div style="padding-left: 445px">
                <input class="topinput" placeholder="项目编号/项目名称/房源地址/房间号" />
              </div>
            </div>
            <hr style="border: 1px solid rgb(245, 245, 245)" />
            <div>
              <div style="display: flex; padding-top: 5px">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g fill="black" fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"
                      />
                      <path
                        d="M3.524 8.857a8.29 8.29 0 0 1 8.26-7.607h.432a8.29 8.29 0 0 1 8.26 7.607a8.94 8.94 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.94 8.94 0 0 1-1.99-6.396m8.26-6.107A6.79 6.79 0 0 0 5.02 8.98a7.44 7.44 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.44 7.44 0 0 0 18.98 8.98a6.79 6.79 0 0 0-6.765-6.23z"
                      />
                    </g>
                  </svg>
                </div>
                <div style="font-weight: bold"> 东西湖新创基地 </div>
                <div> (武汉市-江夏区-庙山) </div>
                <div> 共70间 </div>
              </div>
              <div style="padding-top: 5px">
                <Card
                  :bordered="false"
                  style="border-radius: 10px; background-color: rgb(245, 245, 245)"
                >
                  <div>
                    <div style="display: flex">
                      <div>B1栋1单元</div>
                      <div>(共10套,13间)</div>
                    </div>
                    <hr style="border: 1px solid rgb(235, 235, 235)" />
                    <div>
                      <Row :gutter="[20, 20]" style="padding-top: 15px">
                        <Col :md="{ span: 24 }" :lg="{ span: 24 }">
                          <Card style="border-radius: 10px">
                            <div>1层(6间)</div>
                          </Card>
                        </Col>
                      </Row>
                      <Row :gutter="[20, 20]" style="padding-top: 15px">
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                      </Row>
                      <Row :gutter="[20, 20]" style="padding-top: 15px">
                        <Col :md="{ span: 24 }" :lg="{ span: 24 }">
                          <Card style="border-radius: 10px">
                            <div>1层(6间)</div>
                          </Card>
                        </Col>
                      </Row>
                      <Row :gutter="[20, 20]" style="padding-top: 15px">
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                        <Col :md="{ span: 3 }" :lg="{ span: 3 }">
                          <Card style="border-radius: 10px">
                            <div>
                              <div
                                ><svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="0.8em"
                                  height="0.8em"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="rgb(25, 137, 250)"
                                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                                  />
                                </svg>
                              </div>
                              <div>8101</div>
                            </div>
                            <div></div>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script lang="ts" setup>
  import { Select, SelectOption, Row, Col, Card } from 'ant-design-vue';
  import { InvestmentManagementAPI } from '/@/api/demo/investment';
  import { investmentModel } from '/@/api/demo/model/investmentModel';

  const investmentManagementList = [] as investmentModel[];

  const getInvestmentManagement = async () => {
    const res = await InvestmentManagementAPI();
    investmentManagementList.push(...res);
  };

  getInvestmentManagement();

  const selectRes = '东西湖新创基地';
  // 搜索框选择事件
  const selectResChange = (value: string) => {
    console.log(value);
    console.log(selectRes);
  };
</script>

<style scoped>
  .topinput {
    width: 250px;
    height: 31px;
    border: 1px solid #d9d9d9;
  }
  .topselect {
    display: flex;
    border-radius: 4.5px;
    font-size: 14px;
    font-family: 'Microsoft YaHei', 微软雅黑;
    text-align: left;
    color: rgb(51, 51, 51);
    opacity: 1;
    width: 252px;
    height: 30px;
  }
  .title {
    margin: 5px;
    width: fit-content;
    border-left: 3px solid #1890ff;
    border-radius: 3px;
    padding-left: 5px;
  }
  .select-popup {
    width: 200px;
  }
</style>
