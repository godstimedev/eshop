package models

import "github.com/jinzhu/gorm"

type Cart struct {
	gorm.Model
	User              User    `gorm:"foreignKey:UserID" json:"user"`
	UserID            int64   `json:"user_id"`
	ProductID         int64   `json:"product_id"`
	Product           Product `gorm:"foreignKey:ProductID" json:"product"`
	Quantity          int64   `gorm:"size:1000" json:"quantity"`
	QuantityBought    int64   `gorm:"size:1000" json:"QuantityBought"`
	QuantityAvailable int64   `gorm:"size:1000" json:"QuantityAvailable"`
	IndividualPrice   float32 `json:"individual_price"`
	TotalPrice        float32 `json:"total_price"`
	PaidFor           bool    `gorm:"default:false" json:"paid_for"`
}

func (w *Cart) BeforeSave() error {
	err := DB.Model(&w).Where("product_id =?", &w.ProductID).Error
	if err != nil {
		return err
	}
	w.Quantity += 1
	DB.Save(&w)
	return nil

}
