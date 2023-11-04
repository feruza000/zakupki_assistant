
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const announcementsPage = async () => {
  return (
      <>
          <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
              <div className="container mx-auto">
                  <div className="w-full px-4">
                          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                              <h3>Объявления о госзакупке</h3>
                              <div className="grid grid-cols-1 gap-4">
                                  <div className="border border-blue-500 p-6 rounded-lg shadow-lg">
                                      <h3 className="text-2xl font-semibold text-blue-500 mb-2">Приобретение материалов для отопление</h3>
                                      <div className="text-gray-800">
                                          <p style={{ margin: '0' }} className="text-lg "><span className="font-medium">Название закупки:</span> Очень важная закупка</p>
                                          <p style={{ margin: '0' }} className="text-lg "><span className="font-medium">Организатор:</span> Государственная компания XYZ</p>
                                          <p style={{ margin: '0' }} className="text-lg "><span className="font-medium">Сумма:</span> $1,000,000</p>
                                          <p style={{ margin: '0' }} className="text-lg "><span className="font-medium">Срок подачи заявок:</span> 01.01.2024</p>
                                      </div>
                                      <a href="#" className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 mt-4 rounded-full inline-block">
                                          Подробнее
                                      </a>
                                  </div>
                              </div>

                          </div>
                      </div>
              </div>
          </section>
      </>
  );
};

export default announcementsPage;
