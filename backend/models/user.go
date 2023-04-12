package models

import (
	"html"
	"net/mail"
	"strings"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	gorm.Model
	First_name string `gorm:"size:255;not null" json:"first_name"`
	Last_name  string `gorm:"size:255;not null" json:"last_name"`
	Email      string `gorm:"size:255; not null; unique" json:"email"`
	Password   string `gorm:"size:255;not null" json:"password"`
}

func (u *User) SaveUser() (*User, error) {
	//var err error
	err := DB.Create(&u).Error
	if err != nil {
		return &User{}, err
	}
	return u, nil
}

func CheckEmail(address string) string {
	addr, err := mail.ParseAddress(address)
	if err != nil {
		return "invalid email adress"
	}
	return addr.Address
}

func (u *User) BeforeSave() error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hashedPassword)

	u.First_name = html.EscapeString(strings.TrimSpace(u.First_name))
	u.Last_name = html.EscapeString(strings.TrimSpace(u.Last_name))
	u.Email = CheckEmail(u.Email)
	return nil

}
