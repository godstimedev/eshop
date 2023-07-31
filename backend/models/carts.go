package models

import (
	"errors"

	"github.com/jinzhu/gorm"
	"github.com/shopspring/decimal"
)

type Cart struct {
	gorm.Model
	User              User            `gorm:"foreignKey:UserID" json:"user"`
	UserID            int64           `json:"user_id"`
	ProductID         int64           `json:"product_id"`
	Product           Product         `gorm:"foreignKey:ProductID" json:"product"`
	Quantity          int64           `gorm:"size:1000" json:"quantity"`
	QuantityBought    int64           `gorm:"size:1000" json:"QuantityBought"`
	QuantityAvailable int64           `gorm:"size:1000" json:"QuantityAvailable"`
	IndividualPrice   decimal.Decimal `json:"individual_price"`
	TotalPrice        decimal.Decimal `json:"total_price"`
	PaidFor           bool            `gorm:"default:false" json:"paid_for"`
}

func (w *Cart) BeforeSave() error {
	err := DB.Model(&w).Where("product_id =?", &w.ProductID).Error
	if err != nil {
		return err
	}
	w.Quantity += 1
	quantity := decimal.NewFromFloat(float64(w.Quantity))

	w.TotalPrice = w.Product.DiscountPrice.Mul(quantity)
	DB.Save(&w)
	return nil

}

func GetCart(user_id string) (*Cart, error) {
	var carts Cart
	err := DB.Model(&carts).Where("user_id", user_id).Error
	if err != nil {
		return &carts, errors.New("user has no product in cart")
	}
	return &carts, nil

}
