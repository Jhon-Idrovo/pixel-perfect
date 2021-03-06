function Logo() {
  return (
    <svg
      className="logo"
      version="1.2"
      baseProfile="tiny-ps"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      width="45"
      height="45"
    >
      <title>Hero</title>
      <defs>
        <image
          width="45"
          height="45"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAC4VJREFUaEOtWXtQVNcZ/51dYFneARVBgWV5qAmogKLCro8KWpvYJnEaNEnbNA/tH1GbjkkmbSfTh5lm8mhN05gmmmonSfOqU1NjEgXTwO7iGwzRIMv7zcLyXnZhX6dz7mWXe9m7y9r0m2GAc8/9vu985/c9LyEAKIIlid0EKP+yOg8y+iQIloIiDUAsADkAF4BRELSD4iZ1kxe3bCyqDU6gf83YE0kSviL1erlefx8oORgVEZEVHxeLmOhoRCqVCA9XIEQuByEElFI4XS5MTk5hwmbD1ORUTe/AQL7Fam0Eob8u1Wg+nC3cR5a0nYK1MlCh06kB2b7Q0NCfLVqYqEhasAARyvDpu5I6P7tD33WrbRL9g4ODHT09UQ6746+A+88lWm2Lf03EmhN/FuXWBQ8rDPpHQuRhL6hSFsenLEyETCYL/rTCndPnYL+o242uPhPau3rfsDtsl0s0mreCYTonPM7odAUyKnsyeeGCsqx0FUJDQoLhe0t7HE4nmtraLd29ptNu4n5xq1Z7NRADX6UF1j2j021XhIQdXJqpXp44b14AGEiY8pbU5jebzGY0NLWemHRO/X2rVnvKn7fx8JAAe4VeXxYWEv78yjuWqqKiIiWQ6U8raRyLd/vfM26ZwLX6+q/t9qnnSjSaD6SkSMLjjK5qu1KhfG5Vbk6uMpw5WpAkwKtf3AXByjY5iSt1N9psdtu+reu1p2aHSJ63GBIF4SGKZ/Jybt8RHRXJPeZ0mcOAweyR1leaMbN4zfUbdVNO+8OzMe5jkPIqw/u5y7LLeAzz9O0uXErVYDjyGP+63vhB6XrNTmEKFCldodc/kpy48NCyzIyoGVHBmPj/jG+ByG+amtBrMj0qDIdeeFRU6dRhYRFPrc1fvufWw9q3A/OMjhQUROT0DocT1TW1Q07H1Go+AQmeV+j0h7LU6v2pyUkBXUUowCfb+QBbeEu+CokE+btQCnT09qKppfWVzdrin3tckHu38uLlSc2qfEVQmS6AgECxMTgk+9rM7XZDf+Xq1IY1hVwo4+DBip/MNNVh1eJFCR6v+58EzBFCmPDTFXps1hZO1yy+CvqT29zegdauzjJWZPFK6wzGooL8LL74EdAtxDExEKTKJKC9uwfvnzgLq82O3z69WxyW5mDAiqzqqzWNpdribE7p81dr6dr8lX6xHIxCc+UMk3kIHT290BlqcPrMBRx4/H5sKyme6zVR0L1Qcw3rCvIIOVtZnZednno0LSU5X9o+cySXIHA0Nm7ByLiFORPqbrTg1GfVCFcqcOTQM0hOnB84GQj4G1ta0dFlyiflOsM/cpZk71o4fyaZ+D++hIZzKG13ODA4MobO7l6MW8ZhbOrEP09WciKyM1Jx+KWnuIYhGOobMON6g/E9Uq431KxZsSIvOipCsmAPhlmg1NLd1891L82tbdy2llaG6y+8r+zaUYpHf3T3nL7EbGOxTODiV1/VMksPblhbGD87ofgYMBhgz3LcblM/FAoFGltaYbXaOMXaO01494Nyr5JyuQwvH9yP3GWZ3FqgaOp0OlF54dIQU9q5uXidPNgrEnIOhIzB4RFQQjA6No62jk6vkn2mIfzt7c9E7fT8eXE4/tqzCFcovPtYeGRFU2xMtHeN9ZznDOddTGlaoimadcPfLi2z8DRutUIul6OhqZlrbBkx5JrMIzh6/BMfRG0ozsOzTz7KrQ+PjKK+qQV2ux2FeSu4mO4xUIW+GuSszkBLfZSWgFiQ4Ha5XWDhLSw0DMOjo+js6kZrex9UaUkgoBgZteC1IycluR3Y+wDSUhPRa+r3Po+JjMKqlTne7v6c4byDlFcZzBvWFSYwTAcqXILUmWtUFaxxoBQ3G5thNg/jyrUGfGd9AQeJiQkbXnn9hIgdu4GszBRs3piP2+Jm4OCBYnraYqhTU8B6ycrzlwYZPGrX5K1YGR3JF/x+KWBo4x+ykBQSGsYpZx4aQndPHz4tv4i4mEgUrcnl1ien7Pjjqx/xmKZAYmI8SjYVIC0l0QuhuLhYzhcYrjlYEYKC5TmQEcJHj7M6w3vLl2TvTPTE6SCShehg0/uZELvLxQlgwm4amzA4NIrDRz/Gti2FWJEzHR0oxR9efhdRkUps1K5E7h1qUZxmVmdKL5g/D23tnZiy2zlxrO1LW5yM+qbm98i5qvP5GaqUI2kpi/L9WVl4jms3jLCM26YFsSeAXCaDKj0ZIdPjhf4BM4fL8i+u4HLNTZTduwkZ6kVe9lWGa1hXmIPQUOlxBAuDdyzNhttN0dHdjbExC/cuc0irzfYyX3vU1NK1ef5qj5k6eHhsHK++8SEqDTWixvInD9yJ75XydYTLRVFvNGJ0zILDR07C6XThpw9uQ9LCBF5piZvkWtRZeSBdlYLo6GgMmM3o7eMdk2kik1GVp8prLl6Vrw7UebN0PDQ6hjePn0SlninN0+r823Fg34Pe//vNg+jtM6HmmhGfV1zi1h/fcy9iolnGlaZ+8wiMjZ0wNnVhdf4SDjK3xcVycVsYSShoc6m2OJNTuqLKsDMjPeWwanHKbf4Ys6gQHh6OY+/wM5RzlZcRGxOFF36/F5ERSq8BbbZJGJtbwNqkN46dwtjYBJ5+YhcXs4XU02tGfUM7Gho7uTDoIRY99jz8fTCIsGQyQ5SNBHayWYi3Uqm8cMmuLVwVynVgs+YFvQNmhIaGem/XZBrEE8/8Cb/55W4syUyddU7CVXMTVisam7tw6tNq/GLvfaI9pv5hHHvnUw6zUnT3XRrcvlQlekRBp0q1xXzn4hl5VOgMh7LU6ftTk5JmKlQKjE1YMOVwijz8S30NRkbGcPddG72MhZAcGR1De0cXx+c/ulps0uZ597HIwtJ4/8CwD77VqmR0dvcjNiYSjz10J2SEWZt3H0rxl9INRXvZlXotzca4yvCIp1evXL7bUzy5XC509w8gQqkUCai+WId1hbneg7hcbtgddi4sMWKC6o2NcDgcYM/YVXtIV10H9jObGI63byvC8PAY/vWJHkVrcrAsO5WDHSV01CUjq75bVNQksjSHbW7ukfTKskw1l2m+MTYhXKlETLRgDDLtxQRMEf56O7q6sSg5iQt9HuoXeL1nra9/GMeFsJi24tLsVNyzXes1gtvlhrG5C2ydRQxQ7N6yvviIB0x+J0zUTXHD2ITFyUlIiPf4p3hSyZgMj4xgeHgUGensq8UMsRq6vqEB1O05GsGxt0+j1zTEbfJwylQvwo4fbPDehu8slH5Uoi0WOIV4LsIxY/NoNstTKMJ2WCasYBPT+QnxiIyMhFzGIoDYeYZYCUqp4GD8jpGRUXR294giwOfll1DzldF7MlYc3XfPJlGSmVGawA1XHQge2aLRXBEaRLLPqdCf30MIXpLL5FGs8PbgSBmuxLyEeC6GiqaWswBqGjCjT1CpeR5brZN4/a2PMTXlQHJSAu7/YQnCwvioJCJ2ahltc4Pu36LR/Ft4M56/p/cLL4agvEr/EAheICDTnSe/jYUbtSoNURIFFnPArp4eMOv7a0EuXqlH3fVm/HjXVigUEgrzPnOdEHrQ73xaYp7uPXR5leFOEPyOgHjrErZfJpcjO0MtshILZW0dXRi3zCQKsfl4SSyasCLIZ8YyvdlN6AlK3dyXAGndJDA9+6Y831xAUObdTsGNALLU6dwHI1bntrZ1gA3DZ1+l5NVLgJKCWkFxauaby7TK3C+x+n56d+ELvNjyKsNjkOFFQgkDNEcxMdFgn+Va2ju4mBywKw0wJaCgb1LQy1u0mqO+APdd8WUVAC/nDIY0lxv7CLCXAKHc2HX6I2cwwmZ52zCliCAEou+IgeDqeT+4KYmERhV6QxmleA4UGaxW4ZPNHERQSyllOb1FRvGrzeuL358TTkLACQDgjV4S8PHRQsoSFVUXl1PiPACCHLiRCoIYcDfB+d4gCDpB0RDMN0KhQH9W/y9UKhQ4L9hjPgAAAABJRU5ErkJggg=="
        />
      </defs>

      <g id="Hero">
        <use id="Logo" href="#img1" transform="matrix(1,0,0,1,0,0)" />
      </g>
    </svg>
  );
}

export default Logo;
