import { useOutletContext, useParams } from "react-router";

export const Product = () =>
{
    const { products } = useOutletContext()
    const { id } = useParams();

    const findProduct = products.find((p) => p.id === parseInt(id))

    return (
        <section className="content">
            <div className="container">
                {
                    findProduct ?
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__left">
                                    <div className="content-product__title">
                                        {findProduct.title}
                                    </div>
                                    <img className="content-product__img" src={findProduct.img} alt="product-image" />
                                    <p className="content-product__text">
                                        {findProduct.description}
                                    </p>
                                </div>
                                <div className="content-product__right">
                                    <div className="content-product__price">
                                        {findProduct.price}
                                    </div>
                                    <button className="btn btn-primary btn-large">Показать телефон</button>
                                </div>
                            </div>
                            <div className="content-side">
                                <div className="content-side__title"></div>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/img/Icons/Truck.svg" alt="Truck" />
                                            <h5 className="content-side__list-item--title">
                                                Доставка
                                            </h5>
                                            <p className="content-side__list-item--text">
                                                Проверка при получении и возможность бесплатно вернуть товар
                                            </p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/img/Icons/Car.svg" alt="Car" />
                                            <h5 className="content-side__list-item--title">
                                                Автотека
                                            </h5>
                                            <p className="content-side__list-item--text">
                                                Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                            </p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/img/Icons/Home.svg" alt="Home" />
                                            <h5 className="content-side__list-item--title">
                                                Онлайн-бронирование жилья
                                            </h5>
                                            <p className="content-side__list-item--text">
                                                Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                            </p>
                                        </div>
                                    </div>
                                    <div className="content-side__footer">
                                        <p className="content-side__footer--item">
                                            © ООО «Абито», 2011–2025
                                        </p>
                                        <a href="#!" className="content-side__footer--href-item">
                                            Политика конфиденциальности
                                        </a>
                                        <a href="#!" className="content-side__footer--href-item">
                                            Обработка данных
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :

                        <h2 className="nope">Братишка нет товара, ты что придумываешь?</h2>
                }

            </div>
        </section>
    )
}