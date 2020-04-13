package com.ssafy;


import java.util.List;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SingleParameterTest
 */
@WebServlet("/param")
public class ServletTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	static class product{
		String pname;
		int price;
		String descr;
		
		public product(String pname, int price, String descr) {
			super();
			this.pname = pname;
			this.price = price;
			this.descr = descr;
		}

		@Override
		public String toString() {
			return "product [pname=" + pname + ", price=" + price + ", desc=" + descr + "]";
		}
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String pname = request.getParameter("pname");
		int price = Integer.parseInt(request.getParameter("price"));
		String descr = request.getParameter("description");
		
		List<product> list = new ArrayList<>();
		list.add(new product(pname, price, descr));
		
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();	//ISO-8859-1
		out.println("<html>");
		out.println("<body>");
		out.println("상품명 : "+pname+"<br>");
		out.println("상품가격 : "+price+"<br>");
		out.println("상품설명 : "+descr+"<br>");
		out.println("</body>");
		out.println("</html>");
	}
}
