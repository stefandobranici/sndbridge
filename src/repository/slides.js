const slides = [
  {
    title: "The Second Bridge",
    subtitle: "Bath's Best Nightclub",
    description:
      "Three exclusive experiences across two venues, all in one night.",
    image:
      "https://lh3.googleusercontent.com/Rf7t2B_2Ods4BCgzTk0SzuY15rZQ-awPcWiEr66AbU4EgDUIIZuTdXYlEJeWpCEFJw_Jo86pY8zoYypuIRV0w5kezXnACK4fCBkZFO7rXIEJexGMv2ooG96ckwoyceDsUkMpnME9iicC6bup1ZzQt_Uy9MmIrh1mmFO5uYoefd6E4ccx53bYXvGKLtpq0-hthT3mBrb9mcBtQ54oSG9G1mViLDVsxTe3lCkf4HRipvwXAdFpUpsM9GhgP5ILHniH9ET8_wF4XBFHKUQEW-P9Yo1JSCUZ7rK0Ot-TggpX7va_D28jKwvtph8wc-lJObxSr21B4UCXrbGeiwwLK83b2GUYb8huiAmOZ53Hs_DACV4MAk8HZsLefpFDyckgE1cpSDjHNUIH9bI9rc8JmEwa0Rj427wuU7s72FnQlb5psa7ei5wBJkav1scyDHJZwyQ25xj1hsyRqOsoIN-1BJJJPEsevXWL3RS44r06keiGIX-FB8v1VyLUs9TRupFaQOlnpfZ8OAhzhNs-zy-MylyKZWTZvaS43rwNnmrKNK6CCfqfrsgD77YY4sXS36gB0etgyaAyWm33oWPMUqMn4TBGIHQ3SIXx2u1B0yad26R5kgtqQVS3iO8UumSaqgSdk5rkTLb7fuUDKVAc_OQvHxz_141wBJmmFUyesu9EwV7rTASKIFMmN72sormyrOOQ=w1440-h768-no?authuser=0",
  },
  {
    title: "Celebrate events",
    subtitle: "",
    description:
      "With a VIP bar along with sectioned off Vaults, we’ve got you covered for going BIG.",
    image:
      "https://lh3.googleusercontent.com/RZZiEnU3lD38sJg2hL911EN-glHfDXREKg2yLk0aHIGc-Qr5z3nzstwNYJx9B4HBJ6Wvg1pHKIjr9Uo3U0IXOsD9Tt2sLukHy8TFUGf0PZbo-WP8zBrw7P8lPqGmZcpz70ouLXXTq4j14-bkXhlJyWHlr2x4lA7-EfKYnf8gPkbCUt79TYkLDzyBtXEO5ZuDvWAaEYTDn9Ry1eujmKi9xU3H2aHs5d7b4KC_79BSmZk81wC0YT0JAdQzoO0Qjj4DYXpybEYtivqTqj7shd-41sstPb00460QHwoEitG1taH9CV1mMCm9nhujS-P73PRHRsoPMjFNpphrA7ICF_Jjfot6D0y0JYFkbgUntD-t4hu74NPvYlxboTRz5Y9US9pLBRK85d3pXc-TwBIsfzJ11gr8KacnBSasAVfgPPAdaS748W81em8YIQLYCwP1WrA2V6u24OtMNCQH4whn17ENBxjEOBg5mtt9kmke6OOfb404Siv2mwNwEsA7mO-t5nXYQfeatnA0FihN_sHl0qeWFCj1i4UZYH7LkdI4-3WjhbU2olKrCpDj11XHQLoHXk36khRZZXkEPX4-3x9jB_D7pHC3RMdsGva0EgEKT9Q39FVgGMB2AxokgSS5Mlg7fF_185Tox2pNUh2jU0Yvj9M-acFjAptdKzyQng3QSDJvR3Eo-MKsjnWqjDhTfPyu=w1931-h1031-no?authuser=0",
  },
  {
    title: "Great Music",
    subtitle: "",
    description:
      " Hip hop, to DnB, to Soulful House, our wide array of house DJ’s will have you groovin’ all night!",
    image:
      "https://lh3.googleusercontent.com/Ij1kQQ7RonPf3zGp8Dj98AjVrHyQR-JvaG0wlaPFZLG38srTqzjARR_l_1YnGKXNOFEvKK3WQGwLNmZ8GgqT-wSoPHr77cgNoeqfrCmdOBEYZ5Q2LsFZoU4H-wj_IpxCCQ_WmPrsgI5SkF2B7nHFKqzDB6rxmtdVGqFsSP2QqpBoG1QzGW2yHSCS7E8iiavyhE6jJv3_fYLoX2I0O1uPq-0vj2hqRyR0qa0I2mtKqQqJUMAuwRN3UmpOKJ7RZW67rpGslSFN0s1uRwngdCTM98p8Awg6NW2K9B5qKTqNKQC46eJnc9RMMm4g2CwUJm1xz32IFT2e7dObi-3VnPCPYfyk2aXPB5gTkv3Y9bbjTiEcky5PNdL48rAyxTpRJh6yyNNQwCvMPDP67-T24EUq41Lgt2zlKRTzs0cK6XGSB3YzpV4Ng2f-bUYR6Ba9rwhcEd_Yf3le9-MI2KPKOITvhTt7sgebWkmff_Nopr1O_JbWFTEdP2l_baf7y6Sm6buzfPH67LjXNKK8HCPMdp9AvewoF948G2f4J_jAWdrGbKed2IrIHfEGHTA1VaKOwVR3cagAvYa_Q4sEye-emHH3eVdj3aMsO4P7BceokFitcQqIJ0WYx0PYm0MyT5I_ClRVsdeUu46izrudyqCXta7qaDv05irMNYqZp3_OlK-Dc7Wg4N8Pu2uWpEYokpuK=w1931-h1031-no?authuser=0",
  },
  {
    title: "Great people",
    subtitle: "",
    description: "The only place to celebrate with friends!",
    image:
      "https://lh3.googleusercontent.com/HL9MuyDyYp57kqu4-MuCqP0TeHQ8viJBpFkZFlaEg6Gvw_Rie9OdQphH6g2HRRaDXcg0jUSTCwlDKNUCGntpOaXmLs1mPhEyjhOKUIDK8VEn-2oUpukNaB-YSDKj-qpT9L1djR7E4h622F6pCer7hCIB66B7uMr4NNs9jJlX2_4ynuo06Lh72Zg-xe4JxSh6OpYeOnbNNN80Sl7xKi-nRX0XPypaSOl_12i03gdY7OhWE32HzBEk0Q-gN14r2kcYnkJyJ5-qrODPT54jCLb_nGfIOILx-VF4Do30k5lhhw1NXJcxR4jQaoLf4a7fnavZ1jjlfWqbLYJyjIDQ9EsCxJ3B3i5HiD3frRNacK02lGVbtExYyP_3XY0XLjrx4cWl0zPfuH6vTY6aFpLUhZYjh64DtfV2CyLjKbWbh4km50r9IUJBtcYhbGuCNEuGoL2HJC8BjbSNR9HlGXfeoompRwWK4u8miGCBp4gZeS0SD05ixwj09E_s1pe5aS9qV2vEV_Vod-alki87gcTr1KX8VQAJ7pLMBtWnCxbTDveUlfDIP-Ol2BjBRVJ7AFYbWSx5ZNry730o3D4jPhewETBnauGSg9nxhiHQmIlDwYOaXvXhYBZ1UUdrT67iUhweDUruow-1Vu328X5eT1vTczJOif26J4UGCI5JbRSSE5N3uunlDI3mfZMqcRb43f2d=w1931-h1031-no?authuser=0",
  },
];

export default slides;
