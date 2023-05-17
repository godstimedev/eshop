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
}
