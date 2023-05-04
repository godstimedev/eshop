package models

import (
	"errors"

	"github.com/jinzhu/gorm"
)

type Category struct {
	gorm.Model
	Name          string `gorm:"size:255;not null;unique" json:"name"`
	Specification string `gorm:"size:500;null" json:"specification"`
}

func GetAllCategory() ([]Category, error) {
	var u []Category
	if err := DB.Find(&u).Error; err != nil {
		return u, errors.New("no category")
	}
	return u, nil
}

func (w *Category) SaveCategory() (*Category, error) {
	err := DB.Create(&w).Error
	if err != nil {
		return &Category{}, err
	}
	return w, nil
}
