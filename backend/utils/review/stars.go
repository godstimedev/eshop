package review

func GetStarsProduct(usercount int64, current_stars, star_user_give float64) float64 {
	//this function is to update the star review for a product
	return (current_stars + star_user_give) / float64(usercount)
}
