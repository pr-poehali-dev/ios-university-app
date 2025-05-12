
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/ui/PageTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TeamPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <PageTitle 
          title="Команда проекта" 
          subtitle="Познакомьтесь с командой разработчиков и их вкладом в проект"
        />

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                Наша команда
              </h2>
              <p className="text-gray-600 font-roboto mb-4">
                Проект разрабатывается командой студентов нашего университета в рамках курса по проектной деятельности под руководством опытных преподавателей и при поддержке IT-отдела университета.
              </p>
              <p className="text-gray-600 font-roboto mb-4">
                Каждый член команды отвечает за определенную область разработки, что позволяет эффективно распределить задачи и обеспечить качественный результат.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3">
                  <div className="font-bold text-4xl font-montserrat text-[#9b87f5]">6</div>
                  <div className="text-gray-600 font-roboto">Студентов</div>
                </div>
                <div className="text-center p-3">
                  <div className="font-bold text-4xl font-montserrat text-[#9b87f5]">2</div>
                  <div className="text-gray-600 font-roboto">Наставника</div>
                </div>
                <div className="text-center p-3">
                  <div className="font-bold text-4xl font-montserrat text-[#9b87f5]">4</div>
                  <div className="text-gray-600 font-roboto">Направления</div>
                </div>
                <div className="text-center p-3">
                  <div className="font-bold text-4xl font-montserrat text-[#9b87f5]">8</div>
                  <div className="text-gray-600 font-roboto">Месяцев работы</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-montserrat text-[#1A1F2C]">
            Участники проекта
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMemberCard 
              name="Александр Петров"
              role="Руководитель проекта"
              avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              contribution="Управление проектом, координация работы команды, взаимодействие с заказчиком, разработка технического задания."
              skills={["Project Management", "SCRUM", "Agile", "iOS Development"]}
              socials={[
                { icon: "Linkedin", url: "#" },
                { icon: "Github", url: "#" },
                { icon: "Mail", url: "#" }
              ]}
            />
            
            <TeamMemberCard 
              name="Екатерина Иванова"
              role="UI/UX Дизайнер"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              contribution="Разработка интерфейса приложения, создание прототипов, проектирование пользовательского опыта, разработка дизайн-системы."
              skills={["UI Design", "UX Research", "Figma", "Sketch"]}
              socials={[
                { icon: "Instagram", url: "#" },
                { icon: "Dribbble", url: "#" },
                { icon: "Mail", url: "#" }
              ]}
            />
            
            <TeamMemberCard 
              name="Михаил Сидоров"
              role="iOS Разработчик"
              avatar="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              contribution="Разработка клиентской части приложения, интеграция с API, оптимизация производительности, реализация пользовательского интерфейса."
              skills={["Swift", "SwiftUI", "Xcode", "UIKit"]}
              socials={[
                { icon: "Github", url: "#" },
                { icon: "Linkedin", url: "#" },
                { icon: "Mail", url: "#" }
              ]}
            />
            
            <TeamMemberCard 
              name="Анна Козлова"
              role="Backend Разработчик"
              avatar="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              contribution="Разработка серверной части приложения, проектирование базы данных, создание API, интеграция с университетскими системами."
              skills={["Node.js", "MongoDB", "Express", "API Design"]}
              socials={[
                { icon: "Github", url: "#" },
                { icon: "Twitter", url: "#" },
                { icon: "Mail", url: "#" }
              ]}
            />
            
            <TeamMemberCard 
              name="Дмитрий Волков"
              role="QA Инженер"
              avatar="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              contribution="Тестирование приложения, выявление и регистрация ошибок, составление тест-кейсов, проведение регрессионного тестирования."
              skills={["Manual Testing", "Automated Testing", "QA", "TestFlight"]}
              socials={[
                { icon: "Linkedin", url: "#" },
                { icon: "Github", url: "#" },
                { icon: "Mail", url: "#" }
              ]}
            />
            
            <TeamMemberCard 
              name="Ольга Николаева"
              role="Документалист"
              avatar="https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              contribution="Разработка и поддержка документации проекта, создание пользовательских руководств, документирование API, ведение отчетности."
              skills={["Technical Writing", "Documentation", "Markdown", "Confluence"]}
              socials={[
                { icon: "Linkedin", url: "#" },
                { icon: "FileText", url: "#" },
                { icon: "Mail", url: "#" }
              ]}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 font-montserrat text-[#1A1F2C]">
            Распределение задач
          </h2>
          
          <Tabs defaultValue="roles">
            <TabsList className="mb-6">
              <TabsTrigger value="roles">По ролям</TabsTrigger>
              <TabsTrigger value="sprints">По спринтам</TabsTrigger>
              <TabsTrigger value="contribution">Личный вклад</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roles">
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Роль
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Участник
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Основные задачи
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Взаимодействие
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Руководитель проекта</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">Александр Петров</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Планирование проекта</li>
                          <li>Распределение задач</li>
                          <li>Мониторинг прогресса</li>
                          <li>Управление рисками</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Взаимодействует со всеми членами команды и заказчиком
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">UI/UX Дизайнер</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">Екатерина Иванова</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Создание макетов</li>
                          <li>Проектирование интерфейса</li>
                          <li>Разработка прототипов</li>
                          <li>Дизайн-система</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Взаимодействует с iOS-разработчиком и руководителем проекта
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">iOS Разработчик</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">Михаил Сидоров</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Разработка интерфейса</li>
                          <li>Реализация функционала</li>
                          <li>Интеграция с API</li>
                          <li>Оптимизация приложения</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Взаимодействует с дизайнером, backend-разработчиком и QA-инженером
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Backend Разработчик</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">Анна Козлова</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Разработка API</li>
                          <li>Проектирование БД</li>
                          <li>Серверная логика</li>
                          <li>Интеграция с внешними системами</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Взаимодействует с iOS-разработчиком и QA-инженером
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">QA Инженер</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">Дмитрий Волков</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Тестирование функционала</li>
                          <li>Выявление ошибок</li>
                          <li>Регрессионное тестирование</li>
                          <li>Составление тест-кейсов</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Взаимодействует с iOS и backend разработчиками
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Документалист</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">Ольга Николаева</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Документирование проекта</li>
                          <li>Создание руководств</li>
                          <li>Описание API</li>
                          <li>Ведение отчетности</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        Взаимодействует со всеми членами команды
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="sprints">
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Спринт
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Период
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Основные задачи
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Исполнители
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Спринт 1</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">01.09 - 15.09.2024</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Анализ требований</li>
                          <li>Формирование команды</li>
                          <li>Разработка ТЗ</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Александр</div>
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Ольга</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Спринт 2</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">16.09 - 30.09.2024</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Исследование пользователей</li>
                          <li>Первые эскизы интерфейса</li>
                          <li>Структура БД</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Екатерина</div>
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Анна</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Спринт 3</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">01.10 - 15.10.2024</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Прототипы UI/UX</li>
                          <li>Архитектура приложения</li>
                          <li>Настройка окружения</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Екатерина</div>
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Михаил</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">Спринт 4</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">16.10 - 31.10.2024</div>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 list-disc pl-5">
                          <li>Разработка API</li>
                          <li>Базовые экраны</li>
                          <li>Разработка тест-кейсов</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Анна</div>
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Михаил</div>
                          <div className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">Дмитрий</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="contribution">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4 font-montserrat text-[#1A1F2C]">Личный вклад участников</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2 text-[#1A1F2C]">Александр Петров (Руководитель проекта)</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#9b87f5] h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">20%</span>
                    </div>
                    <p className="text-sm text-gray-600">Руководство проектом, планирование спринтов, организация взаимодействия с заказчиком, распределение задач, решение конфликтов, управление рисками.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-[#1A1F2C]">Екатерина Иванова (UI/UX Дизайнер)</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#9b87f5] h-3 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">15%</span>
                    </div>
                    <p className="text-sm text-gray-600">Проектирование пользовательского опыта, создание макетов и прототипов, разработка дизайн-системы, создание анимаций и переходов, адаптация интерфейса.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-[#1A1F2C]">Михаил Сидоров (iOS Разработчик)</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#9b87f5] h-3 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">25%</span>
                    </div>
                    <p className="text-sm text-gray-600">Разработка клиентской части приложения, реализация пользовательского интерфейса, интеграция с API, оптимизация производительности, внедрение функциональных возможностей.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-[#1A1F2C]">Анна Козлова (Backend Разработчик)</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#9b87f5] h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">20%</span>
                    </div>
                    <p className="text-sm text-gray-600">Проектирование и реализация API, разработка серверной логики, проектирование базы данных, интеграция с университетскими системами, настройка серверной инфраструктуры.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-[#1A1F2C]">Дмитрий Волков (QA Инженер)</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#9b87f5] h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">10%</span>
                    </div>
                    <p className="text-sm text-gray-600">Разработка стратегии тестирования, составление тест-кейсов, проведение функционального и регрессионного тестирования, выявление и регистрация ошибок, валидация исправлений.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-[#1A1F2C]">Ольга Николаева (Документалист)</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#9b87f5] h-3 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">10%</span>
                    </div>
                    <p className="text-sm text-gray-600">Разработка документации проекта, создание пользовательских руководств, описание API, составление отчетов о ходе проекта, ведение документации по совещаниям.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section>
          <div className="bg-gradient-to-r from-[#9b87f5]/20 to-[#D6BCFA]/20 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 font-montserrat text-[#1A1F2C]">
                  Присоединяйтесь к нашей команде
                </h2>
                <p className="text-gray-600 font-roboto mb-6">
                  Мы всегда рады новым участникам, готовым внести свой вклад в развитие проекта. Если вы заинтересованы в работе с современными технологиями и хотите получить опыт разработки реального приложения, напишите нам!
                </p>
                <Button 
                  className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8A76E5] hover:to-[#6E59A5] text-white font-medium px-6 py-2 h-12"
                >
                  Связаться с нами
                </Button>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Команда работает вместе" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

interface SocialLinkProps {
  icon: string;
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatar: string;
  contribution: string;
  skills: string[];
  socials: SocialLinkProps[];
}

const TeamMemberCard = ({ name, role, avatar, contribution, skills, socials }: TeamMemberCardProps) => {
  return (
    <Card className="border-gray-200 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="w-24 h-24 border-4 border-[#9b87f5]/20">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold mt-4 mb-1 font-montserrat text-[#1A1F2C]">{name}</h3>
          <p className="text-[#9b87f5] font-medium">{role}</p>
          
          <div className="flex gap-2 mt-3">
            {socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.url} 
                className="bg-gray-100 p-2 rounded-full hover:bg-[#9b87f5]/10 transition-colors"
                aria-label={social.icon}
              >
                <Icon name={social.icon} className="h-4 w-4 text-[#9b87f5]" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h4 className="font-medium mb-2 text-[#1A1F2C]">Вклад в проект:</h4>
          <p className="text-sm text-gray-600 mb-4">{contribution}</p>
          
          <h4 className="font-medium mb-2 text-[#1A1F2C]">Навыки:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="bg-[#9b87f5]/10 text-[#9b87f5] text-xs px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamPage;
