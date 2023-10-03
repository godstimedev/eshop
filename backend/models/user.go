package models

import (
	"backend/utils/token"
	"errors"
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
	IsAdmin    bool   `gorm:"not null;default:false" json:"is_admin"`
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

func VerifyPassword(password, hashedPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
}

func LoginCheck(email, password string) (string, error) {
	u := User{}
	//var err error

	err := DB.Model(User{}).Where("email=?", email).Take(&u).Error
	if err != nil {
		return "", err
	}

	err = VerifyPassword(password, u.Password)

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", err
	}
	token, err := token.GenerateToken(u.ID)
	//fmt.Print("token: ", token)
	if err != nil {
		//fmt.Print("err: ", err)
		return "", err
	}

	return token, nil
}

func LoginCheckAdmin(email, password string) (string, error) {
	u := User{}
	//var err error

	err := DB.Model(User{}).Where("email=?", email).Where("is_admin=?", true).Take(&u).Error
	//fmt.Println(err)
	if err != nil {
		return "", err
	}

	err = VerifyPassword(password, u.Password)

	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", err
	}
	token, err := token.GenerateToken(u.ID)
	//fmt.Print("token: ", token)
	if err != nil {
		//fmt.Print("err: ", err)
		return "", err
	}

	return token, nil
}

func GetUserByID(uid uint) (User, error) {

	var u User

	if err := DB.First(&u, uid).Error; err != nil {
		return u, errors.New("user not found")
	}

	u.PrepareGive()

	return u, nil

}

func (u *User) PrepareGive() {
	u.Password = ""
}
